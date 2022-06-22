import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

:root {

	--darkish-color: #191919;
	--blueish-color: #00CFB3;
	--blueish-color-2: #AFE2E2;
	--whiteish-color: #FFFFFF;

	--toastify-color-success: #71bb00;
	--toastify-color-error: #D65923;
	--toastify-toast-background: black;
	--toastify-font-family: "Poppins", sans-serif;
}

.Toastify__toast {
}

.rodal-dialog {
	background-color: var(--blueish-color-2);
}

	.tableMain {
        display: flex;
        width: 100%;
    }
    
    .tableBody {
        display: flex;
        width: 100%;
    }

    .tableRow {
        display: flex;
		word-break: break-word;
        width: 100%;
        color: var(--whiteish-color);
    }
    
    .tableCell,
    .tableHead {
		border: 1px solid var(--whiteish-color);
        display: flex;
		align-items: center;
        padding: 12px 0;
        padding-left: 8px;
        width: 100%;
    }

	.imgCell {
		display: flex;
		width: fit-content;
		padding-left: 18px;
		padding-right: calc(51px - 38.4px); // tamanho da celula - padding e tamanho da imagem
		border-radius: 8px 0px 0px 8px;
	}

    .iconCell {
        display: flex;
        justify-content: space-around;
        padding-left: 0;
        width: 25%;
        border-radius: 8px 0px 0px 8px;

        button {
            background-color: transparent;
            border: none;
            color: var(--whiteish-color);
            cursor: pointer;
            &:hover {
                color: var(--blueish-color);
            }
        }
    }
    
    .idCell {
        border-radius: 0px 8px 8px 0px;
    }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, input, textarea, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
    background-color: var(--darkish-color);
    color: var(--whiteish-color);
    font-family: "Poppins", sans-serif;
}

figcaption {
        display: none;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: "";
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
`