import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Checkbox,
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
import UserContext from "../../context/userContext";
import useApi from "../../hooks/useApi";

const Login = () => {
        // useNavigate
        const navigate = useNavigate();

        // useContext
        const context = useContext(UserContext);

        // useApi
        const {login} = useApi();

        const [emailInput, setEmailInput] = useState("");
        const [passwordInput, setPasswordInput] = useState("");
        const [rememberMe, setRememberMe] = useState(false);
        const [loginError, setLoginError] = useState("");
        const [loginInfo, setLoginInfo] = useState("");

        const emailChangeHandler = (event) => {
            setEmailInput(event.target.value);
        };

        const passwordChangeHandler = (event) => {
            setPasswordInput(event.target.value);
        };

        const rememberMeChangeHandler = (event) => {
            setRememberMe(event.target.checked);
        };

        const loginOnSubmitHandler = async (event) => {
            event.preventDefault();
            context.setIsAuthLoading(true);

            try {
                const res = await login(emailInput, passwordInput);

                setLoginError("");
                setLoginInfo("Login successful!");

                context.setUser({
                    token: res.data.token,
                    userId: res.data.userId,
                });
                context.setIsLoggedIn(true);

                if (rememberMe) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userId", res.data.userId);

                    const remainingMilliseconds = 10 * 60 * 60 * 1000;
                    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);

                    localStorage.setItem("expiryDate", expiryDate.toISOString());
                    context.setAutoLogout(remainingMilliseconds);
                }

                context.setIsAuthLoading(false);
                navigate("/");
            } catch (err) {
                if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                    setLoginError("Invalid email or password");
                    context.setIsAuthLoading(false);
                } else {
                    setLoginError("Something went wrong");
                    context.setIsAuthLoading(false);
                }
            }
        };

        const signUpLinkHandler = () => {
            navigate("/signup");
        };

        return (
            <Container
                maxH="100vh"
                maxW="lg"
                py={{
                    base: "8",
                    md: "44",
                }}
                px={{
                    base: "0",
                    sm: "8",
                }}
                overflowY="hidden"
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
                                    Log in to your account
                                </Heading>
                                <HStack spacing="1" justify="center">
                                    <Text color="muted">Don't have an account?</Text>
                                    <Button
                                        variant="link"
                                        colorScheme="blue"
                                        onClick={signUpLinkHandler}
                                    >
                                        Sign up
                                    </Button>
                                </HStack>
                            </Stack>
                            <Stack spacing="5">
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
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox value={rememberMe} onChange={rememberMeChangeHandler}>
                                    Remember me
                                </Checkbox>
                                <Button variant="link" colorScheme="blue" size="sm">
                                    Forgot password?
                                </Button>
                            </HStack>

                            {loginError && (
                                <Stack spacing="2">
                                    <Alert status="error">
                                        <AlertIcon/>
                                        {loginError}
                                    </Alert>
                                </Stack>
                            )}

                            {loginInfo && (
                                <Stack spacing="2">
                                    <Alert status="success">
                                        <AlertIcon/>
                                        {loginInfo}
                                    </Alert>
                                </Stack>
                            )}

                            <Stack spacing="6">
                                <Button variant="primary" onClick={loginOnSubmitHandler}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        );
    }
;

export default Login;
