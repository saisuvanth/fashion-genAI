import { Flex, Textarea } from "@chakra-ui/react";

const textAreaContainerStyle = {
  position: "relative",
};

const PromptTextArea = ({ label, value, handleChange }) => {
  return (
    <>
      <Flex sx={textAreaContainerStyle} direction="column" p={"10px"}>
        <Textarea
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="16px"
          borderRadius={"8px"}
          focusBorderColor="teal.400"
          variant="filled"
          value={value}
          onChange={handleChange}
          placeholder="Describe desired clothing style/occasion for suggestions. 👗"
          size="sm"
          resize={"none"}
        />
      </Flex>
    </>
  );
};

export default PromptTextArea;
