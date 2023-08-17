import React, { useRef, useState, useContext } from "react";
import { Box, Button, Card, Flex } from "@chakra-ui/react";
import Slider from "./Slider";
import CanvasDraw from "react-canvas-draw";
import Options from "./Options";
import { BsEraser, BsStars } from "react-icons/bs";
import { BiUndo } from "react-icons/bi";
import UserContext from "../../context/userContext";
import ChatArea from "../../components/ChatArea/ChatArea";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  const ref = useRef(null);
  const [magicEraser, setMagicEraser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const User = useContext(UserContext).user;

  return (
    <Flex gap="10px" height="94%" padding="0 10px">
      <ChatArea />
      <Card
        padding="30px"
        height="98%"
        width="45%"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Flex direction="column" alignItems="center">
          {!isLoading ? (
            <CanvasDraw
              imgSrc="https://projectbandi.com/cdn/shop/products/IMG_5995.jpg?v=1573801843"
              sx={{
                borderRadius: "20px",
              }}
              brushColor="#fff"
              ref={ref}
              canvasHeight={500}
              disabled={!magicEraser}
            />
          ) : (
            <Spinner />
          )}
          <Options
            options={[
              {
                name: "Erase All",
                icon: <BsEraser size={20} />,
                onClick: () => ref.current.eraseAll(),
              },
              {
                name: "Magic Eraser",
                icon: (
                  <BsStars size={20} fill={magicEraser ? "black" : "grey"} />
                ),
                onClick: () => {
                  ref.current.eraseAll();
                  setMagicEraser((prev) => !prev);
                },
              },
              {
                name: "Undo",
                icon: <BiUndo size={20} />,
                onClick: () => ref.current.undo(),
              },
            ]}
            magicEraser={magicEraser}
          />
        </Flex>
      </Card>
      <Slider />
    </Flex>
  );
};

export default Home;
