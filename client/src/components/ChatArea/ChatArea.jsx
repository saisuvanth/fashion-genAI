import {
  Button,
  Checkbox,
  Flex,
  Select,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  Card,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiMale, BiFemale } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import PromptTextArea from "./PromptTextArea";

const pointer = {
  cursor: "pointer",
};

const chatAreaContainer = {
  //   position: "relative",
};

const submitContainer = {
  //   position: "absolute",
  bottom: "0px",
  width: "100%",
};

const clothesCategory = {
  male: {
    fullBodyWear: ["Suits", "Sherwanis"],
    upperBodyWear: [
      "T-Shirts",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Jackets",
      "Sweaters",
      "Blazers & Coats",
      "Kurtas & Kurta Sets",
      "Nehru Jackets",
      "Rain Jackets",
      "Not Interested",
    ],
    lowerBodyWear: [
      "Dhotis",
      "Jeans",
      "Trousers & Capris",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track Pants & Joggers",
      "Not Interested",
    ],
  },
  female: {
    fullBodyWear: [
      "Suits",
      "Co-ords",
      "Sarees",
      "Ethnic Wear",
      "Dresses",
      "Playsuits",
      "Jumpsuits",
      "Lehenga Cholis",
    ],
    upperBodyWear: [
      "T-Shirts",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Jackets",
      "Sweaters",
      "Blazers & Coats",
      "Kurtis, Tunics & Tops",
      "Tops",
      "Shrugs",
      "Not Interested",
    ],
    lowerBodyWear: [
      "Jeans",
      "Trousers & Capris",
      "Shorts & Skirts",
      "Leggings, Salwars & Churidars",
      "Skirts & Palazzos",
      "Not Interested",
    ],
  },
};

const ChatArea = () => {
  const [gender, setGender] = useState("male");
  const [upperBodyWearPrompt, setUpperBodyWearPrompt] = useState("");
  const [lowerBodyWearPrompt, setLowerBodyWearPrompt] = useState("");
  const [selectedUpperBodyWear, setSelectedUpperBodyWear] = useState(false);
  const [upperBodyWear, setUpperBodyWear] = useState("");
  const [selectedLowerBodyWear, setSelectedLowerBodyWear] = useState(false);
  const [lowerBodyWear, setLowerBodyWear] = useState("");
  const [selectedFullBodyWear, setSelectedFullBodyWear] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const [selectedCustomPrompt, setSelectedCustomPrompt] = useState(false);

  const handleUpperBodyWearPromptChange = (event) =>
    setUpperBodyWearPrompt(event.target.value);
  const handleLowerBodyWearPromptChange = (event) =>
    setLowerBodyWearPrompt(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = {
      gender: gender,
      fullBodyWear: {
        isFullBodyWear: selectedFullBodyWear,
        category: upperBodyWear,
        prompt: upperBodyWearPrompt,
      },
      upperBodyWear: {
        isUpperBodyWear: selectedUpperBodyWear,
        category: upperBodyWear,
        prompt: upperBodyWearPrompt,
      },
      lowerBodyWear: {
        isLowerBodyWear: selectedLowerBodyWear,
        category: lowerBodyWear,
        prompt: lowerBodyWearPrompt,
      },
      customPrompt: customPrompt,
    };



    console.log(response);

    setLowerBodyWear("");
    setUpperBodyWear("");
    setSelectedFullBodyWear(false);
    setSelectedUpperBodyWear(false);
    setSelectedLowerBodyWear(false);
    setLowerBodyWearPrompt("");
    setUpperBodyWearPrompt("");
    setCustomPrompt("");
    setSelectedCustomPrompt(false);
  };

  const handleSelectUpperClothesCategory = (event) => {
    setUpperBodyWear(event.target.value);
    clothesCategory[gender]["upperBodyWear"].includes(event.target.value)
      ? setSelectedUpperBodyWear(true)
      : setSelectedUpperBodyWear(false);
    clothesCategory[gender]["fullBodyWear"].includes(event.target.value)
      ? setSelectedFullBodyWear(true)
      : setSelectedFullBodyWear(false);
    if (event.target.value === "Not Interested") {
      setSelectedUpperBodyWear(false);
      setSelectedFullBodyWear(false);
    }
    setUpperBodyWearPrompt("");
  };

  const handleSelectLowerClothesCategory = (event) => {
    setLowerBodyWear(event.target.value);
    if (event.target.value === "Not Interested" || event.target.value === "") {
      setSelectedLowerBodyWear(false);
    } else {
      setSelectedLowerBodyWear(true);
    }
    setLowerBodyWearPrompt("");
  };

  const handleCustomPromptChange = (event) => {
    setCustomPrompt(event.target.value);
  };

  const handleSelectedCustomPrompt = (event) => {
    setSelectedCustomPrompt(event.target.checked);
  };

  return (
    <Card
      border="0.0625rem solid #2d3748"
      padding="10px 10px 0px 10px"
      gap="3px"
      height="98%"
      width="30%"
      maxHeight="98%"
      justifyContent={'space-around'}
    >
      <Flex
        overflowY="scroll"
        gap={"20px"}
        height="90%"
        minH={"90%"}
        maxH={"90%"}
        direction="column"
      >
        <Flex
          mb={"5px"}
          direction={"column"}
          border="0.0625rem solid #3c4a61"
          borderRadius={10}
          p={"20px"}
        >
          <Text
            mb="8px"
            textTransform="uppercase"
            fontWeight="500"
            fontSize="16px"
          >
            Gender
          </Text>
          <Flex gap={"20px"}>
            <Tag
              size="lg"
              borderRadius="full"
              colorScheme={gender === "male" ? "teal" : "gray"}
              onClick={() => {
                setGender("male");
              }}
              sx={pointer}
            >
              <TagLabel>Male</TagLabel>
              <TagRightIcon as={BiMale} />
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              colorScheme={gender !== "male" ? "teal" : "gray"}
              onClick={() => {
                setGender("female");
              }}
              sx={pointer}
            >
              <TagLabel>Female</TagLabel>
              <TagRightIcon as={BiFemale} />
            </Tag>
          </Flex>
        </Flex>
        <Flex gap="20px" flexDirection="column">
          <Flex
            flexDirection="column"
            border="0.0625rem solid #3c4a61"
            borderRadius={10}
            p={"10px"}
          >
            <Select
              placeholder="Select Upper/Full Body Wear"
              size="sm"
              borderRadius={"8px"}
              focusBorderColor="teal.400"
              variant="filled"
              value={upperBodyWear}
              onChange={handleSelectUpperClothesCategory}
            >
              {clothesCategory[gender]["fullBodyWear"].map((category) => {
                return <option value={category}> {category}</option>;
              })}
              {clothesCategory[gender]["upperBodyWear"].map((category) => {
                return <option value={category}> {category}</option>;
              })}
            </Select>
            {(selectedFullBodyWear || selectedUpperBodyWear) && (
              <PromptTextArea
                label="PROMPT"
                value={upperBodyWearPrompt}
                handleChange={handleUpperBodyWearPromptChange}
              />
            )}
          </Flex>
          {!selectedFullBodyWear && (
            <Flex
              flexDirection="column"
              border="0.0625rem solid #3c4a61"
              borderRadius={10}
              p={"10px"}
            >
              <>
                <Select
                  placeholder="Select Lower Body Wear"
                  size="sm"
                  borderRadius={"8px"}
                  focusBorderColor="teal.400"
                  variant="filled"
                  value={lowerBodyWear}
                  onChange={handleSelectLowerClothesCategory}
                >
                  {clothesCategory[gender]["lowerBodyWear"].map((category) => {
                    return <option value={category}> {category}</option>;
                  })}
                </Select>
                {selectedLowerBodyWear && (
                  <PromptTextArea
                    label="PROMPT"
                    value={lowerBodyWearPrompt}
                    handleChange={handleLowerBodyWearPromptChange}
                  />
                )}
              </>
            </Flex>
          )}
        </Flex>
        <Flex pl={"10px"}>
          <Checkbox
            colorScheme="teal"
            value={selectedCustomPrompt}
            onChange={handleSelectedCustomPrompt}
          >
            🌟 Seeking a distinct touch? Craft a personalized request! 🎨
          </Checkbox>
        </Flex>
        {selectedCustomPrompt && (
          <Flex
            gap="0px"
            flexDirection="column"
            border="0.0625rem solid #3c4a61"
            borderRadius={10}
            p={"10px"}
          >
            <Text textTransform="uppercase" fontWeight="500" fontSize="10px">
              Custom Prompt
            </Text>
            <PromptTextArea
              label="PROMPT"
              value={customPrompt}
              handleChange={handleCustomPromptChange}
            />
          </Flex>
        )}
      </Flex>
      <Flex justify={"flex-end"} sx={submitContainer}>
        <Button
          rightIcon={<AiOutlineSend />}
          colorScheme="teal"
          variant="solid"
          onClick={handleSubmit}
          w={"100%"}
        >
          Submit
        </Button>
      </Flex>
    </Card>
  );
};

export default ChatArea;
