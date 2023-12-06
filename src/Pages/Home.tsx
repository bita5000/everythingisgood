import React from "react";
import styled from "styled-components";

const Home = () => {
    console.log("hi");
    console.log("hello");
    return (
        <Background>
            <Test>hello</Test>
            <Test>wowowowow</Test>
            <Test>helpme</Test>
        </Background>
    );
};

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: powderblue;
`;

const Test = styled.div`
    width: 100px;
    height: 100px;
    background-color: white;
`;

export default Home;
