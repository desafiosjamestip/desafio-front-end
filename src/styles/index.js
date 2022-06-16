import { createGlobalStyle } from "styled-components";

const poppins = require("../assets/fonts/Poppins-Regular.ttf");
const inter = require("../assets/fonts/Inter-VariableFont_slnt,wght.ttf");
const supermecado = require("../assets/fonts/SupermercadoOne-Regular.ttf");

export const Reset = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, main, textarea {
        font: inherit;
        font-size: 1rem;
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const RootVariables = createGlobalStyle`
        @font-face {
        font-family: "Inter";
        src: url(${inter});
    }

    @font-face {
        font-family: "Poppins";
        src: url(${poppins});
    }

    @font-face {
        font-family: 'Supermercado One';
        src: url(${supermecado});
    }
    :root{
        //THEME COLORS
        --color-primary: #00D0B3;
        --color-secondary-1: #54595F;
        --color-secondary-2: #101010;

        //GENERAL COLORS
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-red: #FF0000;

    }
`;

export const GlobalStyles = createGlobalStyle`
    body { 
        font: var(--text-12);
        background: var(--color-background);
        color: var(--grey-4);
        min-height: 100vh;
    }

    button {
        cursor: pointer;
    }
`;
