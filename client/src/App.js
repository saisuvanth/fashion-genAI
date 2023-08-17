import "./App.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navigation/NavBar";
import SignUp from "./pages/Authentication/SignUp";
import { ContextProvider } from "./context/userContext";
import SignIn from "./pages/Authentication/SignIn";

function App() {
  return (
    <ContextProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Flex direction="column" height="100vh">
            <Box height="100%">
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Box>
          </Flex>
          <SignUp />
          <SignIn />
        </BrowserRouter>
      </ChakraProvider>
    </ContextProvider>
  );
}

export default App;
