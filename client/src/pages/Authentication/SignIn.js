import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { PasswordField } from "./PasswordField";
import CustomModal from "../../components/CustomModal";
import UserContext from "../../context/userContext";
import axios from "axios"
import useApi from "../../hooks/useApi";

export const SignIn = (props) => {
  const context = useContext(UserContext);
  const { login, newChat } = useApi();

  const handleClose = () => {
    context.setSignIn(false);
  };

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = () => {
    if (email.trim().length === 0) {
      window.alert("Email cannot be empty")
      return
    }
    if (password.trim().length === 0) {
      window.alert("Password cannot be empty")
      return
    }
    login(email, password).then(res => {
      localStorage.setItem("token", res.data.token)
      handleClose()
      window.alert("Login Successfull")
      context.setUser({ isLoggedIn: true, user: { userId: res.data.userId } })

    }).catch(e => {
      console.log(e)
      window.alert(e.response.data.message)
    })

  }

  return (
    <CustomModal open={context.signIn} size="lg" handleClose={handleClose} >
      <Stack spacing="6">
        <Stack spacing="6">
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: "sm",
              })}
            >
              Login to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Dont't have one?</Text>
              <Button variant="link" colorScheme="teal">
                Sign Up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          p={'0 10px 40px 10px'}
          bg={useBreakpointValue({
            base: "transparent",
            sm: "bg-surface",
          })}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" border="1px solid #ccc" value={email}
                  onChange={e => setEmail(e.target.value)} />
              </FormControl>
              <PasswordField title="Password" border="1px solid #ccc" value={password}
                onChange={e => setPassword(e.target.value)} />
            </Stack>

            <Stack spacing="6">
              <Button
                variant="primary"
                background="teal.200"
                _hover={{
                  transition: "all 0.3s ease-out",
                  background: "teal.300",
                }}
                color="black"
                transition="all 0.3s ease-out"
                onClick={submitHandler}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </CustomModal>
  );
};

export default SignIn;
