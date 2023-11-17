import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'pretendard-bold';
        src: url('./Assets/fonts/Pretendard-Bold.woff') format('woff');
        
    }

     @font-face {
        font-family: 'pretendard-medium';
        src: url('./Assets/fonts/Pretendard-Medium.woff') format('woff');
    }  

     @font-face {
        font-family: 'pretendard-regular';
        src: url('./Assets/fonts/Pretendard-Regular.woff') format('woff');
    }  
`;

export default GlobalStyles;
