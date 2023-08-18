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
import { useNavigate } from "react-router-dom";
import { PasswordField } from "./PasswordField";
import CustomModal from "../../components/CustomModal";
import UserContext from "../../context/userContext";
import axios from "axios";

export const SignUp = (props) => {
  const navigate = useNavigate();

  const context = useContext(UserContext);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleClose = () => {
    context.setSignUp(false);
  };

  const submitHandler = () => {
    if (name.trim().length === 0) {
      window.alert("Name cannot be empty")
      return;
    }
    if (email.trim().length === 0) {
      window.alert("Email cannot be empty")
      return;
    }
    if (password.trim().length === 0) {
      window.alert("Password cannot be empty")
      return;
    }
    if (password !== confirmPassword) {
      window.alert("Password doesn't match confirm password")
      return;
    }
    axios.post(`${context.url}/auth/signup`, {
      name, email, password, confirmPassword
    }).then((response) => {
      handleClose();
      window.alert("Sign Up Successfull, Please Login")
    }).catch(e => {
      console.log(e)
      window.alert(e.data.data[0].value)
    })
  }

  return (
    <CustomModal open={context.signUp} size="lg" handleClose={handleClose}>
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
              Create a new account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <Button variant="link" colorScheme="teal">
                Sign in
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
          boxShadow={{
            base: "none",
            sm: useColorModeValue("md", "md-dark"),
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" type="text" value={name}
                  onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" value={email}
                  onChange={e => setEmail(e.target.value)} />
              </FormControl>
              <PasswordField title="Password" value={password}
                onChange={e => setPassword(e.target.value)} />
              <PasswordField title="Confirm password" value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
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
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </CustomModal>
  );
};

export default SignUp;
