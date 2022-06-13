import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    
    body {
        background-color: var(--background);
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        border: none;
    }
    
    input {
        font-family: 'Poppins', sans-serif;
        border: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    :root {
        /* main color */
        --background: #161616;
        --dark: #000000;
        --black: #3C3C3B;

        --red: #ff0000;
        --darker-red: #b22222;
        --warning: #df1545;

        --green-1: #00cfb4;
        --green-2: #00b59d;

        --white: #ffffff;

        /* grey scale */
        --gray-1: #efefef;
        --gray-2: #dfdfdf;
        --gray-3: #c5c5c5;
    }

    ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    }
    ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
    background: #949494;
    }
    ::-webkit-scrollbar-track {
    background: #161616;
    border: 0px none #ffffff;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
    background: #666666;
    }
    ::-webkit-scrollbar-track:active {
    background: #333333;
    }
    ::-webkit-scrollbar-corner {
    background: transparent;
    }

`;
