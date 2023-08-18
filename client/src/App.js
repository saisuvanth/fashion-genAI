import "./App.css";
import {Box, ChakraProvider, Flex} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ContextProvider} from "./context/userContext";

import Home from "./pages/Home/Home";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup.jsx";
import HomeLayout from "./components/Layout/HomeLayout";

function App() {
    return (
        <ContextProvider>
            <ChakraProvider>
                <BrowserRouter>
                    <Flex direction="column" height="100vh">
                        <Box height="100%">
                            <Routes>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/signup" element={<Signup/>}/>
                                <Route element={<HomeLayout/>}>
                                    <Route path="/" element={<Home/>}/>
                                </Route>
                            </Routes>
                        </Box>
                    </Flex>l̥
                    <SignUp/>
                    <SignIn/>
                </BrowserRouter>
            </ChakraProvider>
        </ContextProvider>
    );
}

export default App;
