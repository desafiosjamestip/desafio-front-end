import styled from "styled-components";

const BoxForm = styled.div`
	width: 35em;
	height: 35em;
	border: 5px solid #66cfb4;
	border-radius: 2em 0 0 0;
	background-color: #181619;
	box-shadow: 10px 10px 0 #000000;

	display: flex;
	flex-direction: column;

	& div:nth-child(3) {
		display: flex;
		justify-content: space-evenly;
	}
`;

export default BoxForm;
