import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
    body {
      font-family: 'Quicksand', sans-serif;
		font-weight: lighter;
		color: #404040;
		overflow: hidden;
	}

	button {
		cursor: pointer;
	 }
`;

export default Base;
