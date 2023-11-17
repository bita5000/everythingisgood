import React from "react";
import styled from "styled-components";

import logoLarge from "../Assets/images/authentication-bg.svg";
import logoSymbolName from "../Assets/images/logo-symbolName.svg";
import GlobalStyles from "../GlobalStyles";
import { theme } from "../styles/theme";

const Login = () => {
    return (
        <LoginPage>
            <AuthPageLeft>
                <LogoSymbolName src={logoSymbolName} />
                <ProgressText>Hello, world</ProgressText>
            </AuthPageLeft>
        </LoginPage>
    );
};

const LoginPage = styled.div`
    background-color: ${theme.lightBeige};
`;

const AuthPageLeft = styled.div`
    padding: 60px;
    background-image: url(${logoLarge});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100vh;
`;

const LogoSymbolName = styled.img`
    width: 180px;
`;

const ProgressText = styled.div`
    font-family: "pretendard-bold";
    color: ${theme.white};
`;

export default Login;
