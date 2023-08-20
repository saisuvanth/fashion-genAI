import "./App.css";
import {Box, Flex} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import Editor from "./pages/Editor/Editor";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup.jsx";
import HomeLayout from "./components/Layout/HomeLayout";
import Recommender from "./pages/Recommender/Recommender";

function App() {
    return (
        <BrowserRouter>
            <Flex direction="column" height="100vh">
                <Box height="100%">
                    <Routes>
                        <Route element={<HomeLayout/>}>
                            <Route path="/recommender" element={<Recommender/>}/>
                            <Route path="/editor" element={<Editor/>}/>
                            <Route path="*" element={
                                <Navigate to={'/recommender'}/>
                            }/>
                        </Route>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                    </Routes>
                </Box>
            </Flex>
            <SignUp/>
            <SignIn/>
        </BrowserRouter>
    );
}

export default App;
