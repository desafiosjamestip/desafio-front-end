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
        --warning: #df1545;
        --dark-blue: #00263a;
        --green: #00cfb4;
        --white: #ffffff;
        --green-dark: #328780;
        --green-3: #00b59d;
        --green-light: #e4fffb;
        --green-light-2: #d7f7f4;
        --green-light-3: #A1DBD6;
        --blue-light: #f3f4fb;
        --red-2: #ea5757;
        --green-2: #36b35b;
        --black: #3C3C3B;
        
        /* grey scale */
        --gray-1: #f8f9fa;
        --gray-2: #868e96;
        --gray-3: #343b41;
        --gray-4: #212529;
        --gray-5: #121214;
        --gray-dark: #737373;
        --gray-dark-2: #8B8B8C;
        --gray-light: #C8C8C8;
        --gray-light-2: #e3e3e3;
        --gray-light-3: #C7C7C7;
        --gray-light-4: #b4b4b4;

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
