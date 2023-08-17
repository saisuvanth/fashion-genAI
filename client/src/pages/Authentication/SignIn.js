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
import { PasswordField } from "./PasswordField";
import CustomModal from "../../components/CustomModal";
import UserContext from "../../context/userContext";

export const SignIn = (props) => {
  const context = useContext(UserContext);

  const handleClose = () => {
    context.setSignIn(false);
  };

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
                <Input id="email" type="email" border="1px solid #ccc" />
              </FormControl>
              <PasswordField title="Password" border="1px solid #ccc" />
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
