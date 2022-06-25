import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        
        --background: #fcfafa;
        --text: #373737;
        --button-background: #A4B8C4;
        --hover-button-background: #C8D3D5;
    }
    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px){
            font-size: 95.75%              /*por padrão o html possui tamanho de fonte de 16 px... essa porcentagem vai dar 15px*/ 
        }
        @media (max-width: 720px){
            font-size: 87.5%;               /* 14px */
        } 
    }
    body{
        background-color: var(--background);
        color: var(--text);
    }
    body, input, textarea, button{
        font-family:'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
        background-color: var(--button-background);
        border: none;
        border-radius: 3px;
    }

    button:hover{
        background-color: var(--hover-button-background);
    }


`