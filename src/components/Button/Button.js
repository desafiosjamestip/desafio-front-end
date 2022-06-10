import styled from "styled-components";

export const Button = styled.button`
	width: 40%;
	height: 3em;
	border: 1px solid RGB(102, 207, 180);
	border-radius: 2em 2em 0 0;
	background-color: RGB(16, 16, 16);
	color: RGB(102, 207, 180);
	font-size: 1rem;

	&:nth-child(2) {
		color: #8c8c8c;
		border: 1px solid #4d4d4d;
		background-color: RGB(16, 16, 16);

		&:hover {
			background-color: #4d4d4d;
			border: 1px solid #4d4d4d;
			color: #fff;
		}
	}

	&:hover {
		background-color: RGB(102, 207, 180);
		color: #fff;
	}
`;
