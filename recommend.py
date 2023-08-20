



img_urls=[
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8683467/2019/2/18/85df4310-5afd-403a-94a4-98998bb7edfb1550472627493-Moda-Rapido-Men-Black-Colourblocked-Round-Neck-T-shirt-71715-3.jpg",
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8683467/2019/2/18/9316f092-a919-45cb-b39b-452cb0eb3f631550472627513-Moda-Rapido-Men-Black-Colourblocked-Round-Neck-T-shirt-71715-2.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8683467/2019/2/18/1294ebe3-a52b-4343-93ae-a34e8fa61ead1550472627532-Moda-Rapido-Men-Black-Colourblocked-Round-Neck-T-shirt-71715-1.jpg"
]

raw_images=[]
for img_url in img_urls:
  raw_images.insert(0,Image.open(requests.get(img_url, stream=True).raw).convert('RGB'))





print(captions)


print("Response", generated_text)
