import React from "react";
import styled from "styled-components";

function App() {
    console.log("hi");
    return (
        <div>
            <First>hello, world!</First>
            <Second>
                해당 세팅은 TypeScript, file-loader, styled-components를 사용할
                수 있습니다
            </Second>
        </div>
    );
}

const First = styled.h1`
    color: powderblue;
`;

const Second = styled.h4``;

export default App;
