import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Container,
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

import {Logo} from "../../components/Image/Logo";
import {PasswordField} from "../../components/Input/PasswordField";

const Signup = () => {
    // useNavigate
    const navigate = useNavigate();

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [signUpError, setSignUpError] = useState("");
    const [signUpInfo, setSignUpInfo] = useState("");

    const nameChangeHandler = (event) => {
        setNameInput(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmailInput(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPasswordInput(event.target.value);
    };

    const confirmPasswordChangeHandler = (event) => {
        setConfirmPasswordInput(event.target.value);
    };

    const signUpOnSubmitHandler = async (event) => {
        event.preventDefault();
    };

    const loginLinkHandler = () => {
        navigate("/login");
    };
    return (
        <Container
            maxH="100vh"
            maxW="lg"
            py={{
                base: "12",
                md: "44",
            }}
            px={{
                base: "0",
                sm: "8",
            }}
        >
            <Stack spacing="8">
                <Box
                    py={{
                        base: "0",
                        sm: "8",
                    }}
                    px={{
                        base: "4",
                        sm: "10",
                    }}
                    bg={useBreakpointValue({
                        base: "transparent",
                        sm: "bg-surface",
                    })}
                    boxShadow={{
                        base: "none",
                        sm: useColorModeValue("md", "dark-lg"),
                    }}
                    borderRadius={{
                        base: "none",
                        sm: "xl",
                    }}
                >
                    <Stack spacing="6">
                        <HStack justify="center">
                            <Logo width="48px" height="48px"/>
                        </HStack>

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
                                <Button
                                    variant="link"
                                    colorScheme="blue"
                                    onClick={loginLinkHandler}
                                >
                                    Sign in
                                </Button>
                            </HStack>
                        </Stack>

                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input
                                    id="name"
                                    type="text"
                                    value={nameInput}
                                    onChange={nameChangeHandler}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    value={emailInput}
                                    onChange={emailChangeHandler}
                                />
                            </FormControl>
                            <PasswordField
                                title="Password"
                                value={passwordInput}
                                onChange={passwordChangeHandler}
                            />
                            <PasswordField
                                title="Confirm password"
                                value={confirmPasswordInput}
                                onChange={confirmPasswordChangeHandler}
                            />
                        </Stack>

                        {signUpError && (
                            <Stack spacing="2">
                                <Alert status="error">
                                    <AlertIcon/>
                                    {signUpError}
                                </Alert>
                            </Stack>
                        )}

                        {signUpInfo && (
                            <Stack spacing="2">
                                <Alert status="success">
                                    <AlertIcon/>
                                    {signUpInfo}
                                </Alert>
                            </Stack>
                        )}

                        <Stack spacing="6">
                            <Button variant="primary" onClick={signUpOnSubmitHandler}>
                                Sign up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default Signup;