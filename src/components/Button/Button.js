import styled from "styled-components";

export const Button = styled.button`
	width: 50%;
	height: 3.5em;
	border-radius: 2em 2em 0 0;
	background-color: RGB(16, 16, 16);
	color: #fff;

	&:nth-child(1) {
		width: 30%;
		border: 1px solid #312d33;
		background-color: #312d33;

		&:hover {
			background-color: #625a66;
		}
	}

	&:nth-child(2) {
		border: 1px solid #66cfb4;

		&:hover {
			background-color: #66cfb4;
		}
	}
`;
