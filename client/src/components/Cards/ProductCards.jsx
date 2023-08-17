import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCards = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        p={"15px"}
        borderRadius={"8px"}
        // w={"200px"}
        sx={{
          "&:hover": {
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            transform: "scale(1.0025)",
            transition: "all 0.3s ease-out",
          },
        }}
      >
        <Image
          src="https://previews.123rf.com/images/kiuikson/kiuikson1504/kiuikson150400013/38874266-handsome-man-wearing-jeans.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          boxSize={"sm"}
          h={"200px"}
          w={"200px"}
          sx={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        />
        <Flex flexDirection="column" gap="5px" mt={"5px"}>
          <Heading size="sm">Living room Sofa</Heading>
          <Text fontSize={"10px"}>Sofa for modern tropical spaces</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ProductCards;
