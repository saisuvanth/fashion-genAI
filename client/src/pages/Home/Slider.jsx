import React, { useState } from "react";
import { Box, Card, CardHeader, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ProductCards from "../../components/Cards/ProductCards";

const Slider = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card width="25%" height="98%" maxHeight="98%" padding={4} display={'flex'} flexDir={'column'} gap={2}>
      <Box padding="20px" fontWeight="600" fontSize="18px" paddingX={0} paddingY={0}>
        Recommended Products
      </Box>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <SimpleGrid columns={{ xs: 1, sm: 2 }}>
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </SimpleGrid>
      </Card>
    </Card>
  );
};

export default Slider;
