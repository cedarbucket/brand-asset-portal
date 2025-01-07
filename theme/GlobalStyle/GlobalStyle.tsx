"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'MontserratRegular';
        src: url('/assets/fonts/Montserrat-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "PoppinsRegular";
        src: url('/assets/fonts/Poppins-Regular.ttf') format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    * {
        font-family: "MontserratRegular";
        box-sizing: border-box;
    }

    body {
        margin: 0;
        -ms-overflow-style: none;  
        scrollbar-width: none;
        
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;
