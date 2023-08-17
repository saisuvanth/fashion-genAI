import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useStyles } from "@chakra-ui/react";

const Options = (props) => {
  const { options, magicEraser } = props;

  return (
    <Flex m="5px 0">
      {options.map((option, index) => {
        return (
          <Flex
            color="grey"
            margin="10px 6px 0px"
            marginRight="20px"
            direction="column"
            alignItems="center"
            key={index}
          >
            <Box
              borderRadius="50%"
              padding="8px"
              transition="all 0.2s ease-out"
              border="1px solid lightgrey"
              _hover={{
                background: "white",
                transform: "scale(1.2)",
                transition: "all 0.3s ease-out",
                boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.2)",
                cursor:
                  option.name !== "Magic Eraser"
                    ? magicEraser
                      ? "pointer"
                      : "not-allowed"
                    : "pointer",
              }}
              onClick={option.onClick}
            >
              {option.icon}
            </Box>
            <Box textAlign="center" color={magicEraser ? "black" : "grey"}>
              {option.name}
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Options;
