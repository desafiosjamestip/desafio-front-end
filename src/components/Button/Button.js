import styled from "styled-components";

export const Button = styled.button`
	width: 50%;
	height: 3.5em;
	background-color: RGB(16, 16, 16);
	border: 1px solid #66cfb4;
	border-radius: 2em 2em 0 0;
	color: #fff;

	&:nth-child(1) {
		width: 30%;
		/* margin-right: 2em; */
	}

	&:nth-child(2):hover {
		background-color: #333333;
	}
`;
