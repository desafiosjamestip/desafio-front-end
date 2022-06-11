import styled from "styled-components";

const AsideBase = styled.div`
	display: flex;
	flex: 1;
	background-color: aqua;

	& img {
		height: 10em;
		width: 10em;
		/* background-image: url("../assets/aside-img.png"); */
		background-size: contain;
		background-position: top;
		background: cover;
	}
`;

export default AsideBase;
