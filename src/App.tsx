import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Join from "./Pages/Join";
import SelectMode from "./Pages/SelectMode";

function App() {
    return (
        <>
            <Routes>
                <Route path="/select-mode" element={<SelectMode />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}
export default App;
