import styled from "styled-components";

export const FormBase = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 3em;

	form {
		display: flex;
		flex-direction: column;
		justify-content: baseline;
		padding-top: 2em;
		gap: 1.5em;
		width: 100%;
		height: 100%;

		p {
			border-left: 1px solid #625a66;
			padding-left: 1em;
			font-size: 1.3rem;
			color: #fff;
		}

		input {
			float: right;
			width: 45%;
			height: 1.5em;
			margin-left: 1.5em;
			background-color: #fff;
			border: 1px solid #625a66;
			border-radius: 1em 0 0 0;

			&:focus {
				outline: none;
				border: 2px solid #00cfb3;
			}
		}
	}
`;
