import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
