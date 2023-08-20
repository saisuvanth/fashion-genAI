import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useStyles } from "@chakra-ui/react";

const Options = (props) => {
  const { options, magicEraser } = props;
  const checkAction = (option) => {
    return option.name === "Magic Eraser" ? magicEraser ? false : true : false;
  }

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
            _hover={{
              transform: checkAction(option) ? "scale(1.12)" : "",
              transition: "all 0.2s ease-out",
              color: checkAction(option) ? "teal" : "",
              borderColor: checkAction(option) ? 'teal' : "",
              cursor:
                option.name !== "Magic Eraser"
                  ? magicEraser
                    ? "pointer"
                    : "not-allowed"
                  : "pointer",
            }}
          >
            <Box
              borderRadius="50%"
              padding="8px"
              border="1px solid #3c4a61"
              backgroundColor={'inherit'}
              borderColor={'inherit'}
              color={'inherit'}
              onClick={option.onClick}
            >
              {option.icon}
            </Box>
            <Box textAlign="center" fontSize={16}>
              {option.name}
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Options;
