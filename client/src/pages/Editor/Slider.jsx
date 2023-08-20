import React, { useEffect, useState } from "react";
import { Box, Card, CardHeader, Flex, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ProductCards from "../../components/Cards/ProductCards";

const Slider = ({ loading, products }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {

  }, [])

  return (
    <Card width="30%" height="99%" maxHeight="99%" padding={4} display={'flex'} flexDir={'column'} gap={2}>
      <Box padding="20px" fontWeight="600" fontSize="18px" display={'flex'} justifyContent={'center'} paddingX={0} paddingY={0}>
        Recommended Products
      </Box>
      <Flex
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <SimpleGrid columns={2} gap={5}>
          {products?.map((product, index) => (
            <ProductCards product={product} key={product.id} />
          ))}
        </SimpleGrid>
        {loading ? <Spinner /> : products?.length === 0 && (
          <Text paddingX={10} marginTop={10} color={'gray.400'}>
            No products found. Please try again with a different image.
          </Text>
        )}
      </Flex>
    </Card>
  );
};

export default Slider;
