import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode!).render(
    <React.StrictMode>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </React.StrictMode>
);
