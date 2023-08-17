import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useStyles } from "@chakra-ui/react";
import CustomModal from "../CustomModal";
import UserContext from "../../context/userContext";

const NavBar = () => {
  const routes = [{ path: "/", label: "Home" }];

  const context = useContext(UserContext);

  const authenticationRoutes = [
    {
      path: "/signin",
      label: "Sign In",
      show: !context.user.isLoggedIn,
      onClick: () => {
        context.setSignIn(true);
      },
    },
    { path: "/logout", label: "Sign Out", show: context.user.isLoggedIn },
    {
      path: "/signup",
      label: "Sign Up",
      show: !context.user.isLoggedIn,
      onClick: () => {
        context.setSignUp(true);
      },
    },
  ];

  return (
    <Flex color="black" fontSize="20px" fontWeight="550">
      <Flex align="center" color={'white'} height="100%">
        {routes.map((route, index) => {
          return (
            <Box
              padding="10px 15px"
              cursor="pointer"
              paddingX={5}
              color={'white'}
              key={index}
            >
              <Link to={route.path}>{route.label}</Link>
            </Box>
          );
        })}
      </Flex>
      <Flex marginLeft="auto">
        {authenticationRoutes.map((route, index) => {
          return (
            route.show && (
              <Box
                padding="10px 15px"
                cursor="pointer"
                transition="0.3s all ease-out"
                color={'white'}
                _hover={{
                  textShadow: "0px 0px 15px black",
                  transform: "scale(1.0001)",
                  transition: "0.2s all ease-out",
                  color: 'teal.300'
                }}
                key={index}
                onClick={route.onClick}
              >
                <Text>{route.label}</Text>
              </Box>
            )
          );
        })}
      </Flex>
    </Flex>
  );
};

export default NavBar;
