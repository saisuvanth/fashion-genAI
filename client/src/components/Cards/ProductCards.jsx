import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCards = ({ product }) => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        p={"15px"}
        borderRadius={"8px"}
        justifyContent={"center"}
        // w={"200px"}
        sx={{
          "&:hover": {
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          },
        }}
      >
        <a href={product.product_url}>
          <Image
            src={product.img_url}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            boxSize={"sm"}
            h={"200px"}
            w={"200px"}
            aspectRatio={1}
            sx={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          />
          <Flex flexDirection="column" justifyContent={'start'} gap="5px" mt={"5px"} px={2}>
            <Heading size="sm">{product.brand}</Heading>
            <Text fontSize={"10px"}>{product.name}</Text>
            <Text fontSize={"10px"}>{product.price}</Text>
          </Flex>
        </a>
      </Flex>
    </>
  );
};

export default ProductCards;
