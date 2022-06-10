import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
}

:root{
    --gray-0:#FAFAFA;
    --gray-1:#DBDBDB;
    --gray-2:#B0B0B0;
    --gray-3:#101010;
    --gray-4:#212121;
    --global-color:#00D0B3;
    --toastify-icon-color-success: var(--global-color);
    --toastify-toast-width: 200px;
    --toastify-color-success: var(--global-color);
}

#root{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: var(--gray-3);
}

button{
    cursor: pointer;
}


ul{
    list-style: none;
}
`