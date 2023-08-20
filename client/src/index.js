import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {ContextProvider} from "./context/userContext";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
})

root.render(
    <React.StrictMode>
        <ContextProvider>
            <ChakraProvider theme={theme}>
                <App/>
            </ChakraProvider>
        </ContextProvider>
    </React.StrictMode>
);
