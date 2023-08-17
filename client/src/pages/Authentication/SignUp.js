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
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordField } from "./PasswordField";
import CustomModal from "../../components/CustomModal";
import UserContext from "../../context/userContext";

export const SignUp = (props) => {
  const navigate = useNavigate();

  const context = useContext(UserContext);

  const handleClose = () => {
    context.setSignUp(false);
  };

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
                <Input id="name" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField title="Password" />
              <PasswordField title="Confirm password" />
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
