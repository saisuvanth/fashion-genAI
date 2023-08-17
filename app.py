from diffusers import StableDiffusionXLPipeline,StableDiffusionXLInpaintPipeline,StableDiffusionXLImg2ImgPipeline
import torch

# pipe1 = StableDiffusionXLPipeline.from_pretrained(
#     "stabilityai/stable-diffusion-xl-base-1.0", torch_dtype=torch.float16, use_safetensors=True
# )
# pipe1.to("cuda")

# pipe2 = StableDiffusionXLImg2ImgPipeline.from_pretrained(
#     "stabilityai/stable-diffusion-xl-base-1.0", torch_dtype=torch.float16, use_safetensors=True
# )
# pipe2.to("cuda")

pipe3 = StableDiffusionXLInpaintPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0", torch_dtype=torch.float16, use_safetensors=True
)
pipe3.to("cuda")

# AWS credentials and region
aws_access_key = 'AKIAVLCJWYVQJYFETG55'
aws_secret_key = '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'

region_name = 'ap-south-1'
# S3 bucket information
bucket_name = 'modelgpt-bucket'
object_key = 'image'  # Change this to the desired object key

import pinecone
from fashion_clip.fashion_clip import FashionCLIP

pinecone.init(api_key="db9e1fd0-3e59-4c64-bbb1-eaf98295bb0d", environment="asia-southeast1-gcp-free")
index = pinecone.Index("myntra-image-index")

fclip = FashionCLIP('fashion-clip')

def pinecone_search(img_url):
    import numpy as np
    from PIL import Image
    import requests
    from io import BytesIO

    response = requests.get(img_url)
    print(response, img_url)
    if response.status_code == 200:
        image = Image.open(BytesIO(response.content))
        image_embeddings = fclip.encode_images([image], batch_size=1)
        image_embeddings = image_embeddings/np.linalg.norm(image_embeddings, ord=2, axis=-1, keepdims=True)
        embed = np.ndarray.tolist(image_embeddings[0])
        res = index.query(embed, top_k=20, include_metadata=True)
        return res
    else:
        raise Exception("Failed to download image")

import boto3
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from IPython.display import display
from io import BytesIO
from diffusers.utils import load_image
import uuid
import base64
from PIL import Image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

def upload_to_s3(image):
    image_bytes = BytesIO()
    image.save(image_bytes, format='JPEG')  # Adjust the format if needed
    image_bytes = image_bytes.getvalue()

    # Create a Boto3 S3 client
    s3_client = boto3.client('s3', aws_access_key_id=aws_access_key, aws_secret_access_key=aws_secret_key, region_name=region_name)

    unique_filename = str(uuid.uuid4()) + '.jpeg'

    # Upload the image to S3 bucket
    response = s3_client.put_object(
        Bucket=bucket_name,
        Key=unique_filename,
        Body=BytesIO(image_bytes),
        ACL='private'  # Set the desired ACL, e.g., private, public-read, authenticated-read, etc.
    )

    print(response)

    # Display the URL to the uploaded image if the ACL allows public access
    if response['ResponseMetadata']['HTTPStatusCode'] == 200:
        print(f"Uploaded image successfully")
        return unique_filename
    else:
        print("Image upload failed.")

    return -1

@app.get("/")
def main():
    return {"message": "Hello World"}

class TextToImageRequestBody(BaseModel):
  prompt: str

class TextImageToImageRequestBody(BaseModel):
  prompt: str
  image: str

class TextMaskedImageToImageRequestBody(BaseModel):
  prompt: str
  image: str
  masked_image: str

class SimilarProductRequestBody(BaseModel):
  image: str


@app.post("/text-to-image")
def text_to_image(textToImageRequestBody: TextToImageRequestBody):
    return
    image = pipe1(prompt=textToImageRequestBody.prompt).images[0]

    filename=upload_to_s3(image)

    # Return the image in the HTTP response
    return {'filename': filename}

@app.post("/text-image-to-image")
def text_image_to_image(textImageToImageRequestBody: TextImageToImageRequestBody):
    return
    image = pipe2(prompt=textImageToImageRequestBody.prompt, image=load_image(textImageToImageRequestBody.image).convert("RGB")).images[0]

    filename=upload_to_s3(image)

    # Return the image in the HTTP response
    return {'filename': filename}

@app.post("/text-masked-image-to-image")
def text_masked_image_to_image(textMaskedImageToImageRequestBody: TextMaskedImageToImageRequestBody):
    masked_img_bytes = base64.b64decode(textMaskedImageToImageRequestBody.masked_image)
    masked_img = Image.open(BytesIO(masked_img_bytes))

    image = pipe3(prompt=textMaskedImageToImageRequestBody.prompt, image=load_image(textMaskedImageToImageRequestBody.image).convert("RGB"),mask_image=masked_img, num_inference_steps=50, strength=0.80).images[0]

    filename=upload_to_s3(image)

    # Return the image in the HTTP response
    return {'filename': filename}

@app.post("/get-similar-products")
def get_similar_products(similarProductRequestBody: SimilarProductRequestBody):
    similar_products = data=pinecone_search(similarProductRequestBody.image)
    metadata_list = [item['metadata'] for item in data['matches']]

    return {'products':metadata_list}

import nest_asyncio
import uvicorn

nest_asyncio.apply()
uvicorn.run(app, port=8000)

