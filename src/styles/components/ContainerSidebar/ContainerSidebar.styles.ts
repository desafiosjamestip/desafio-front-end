import styled from 'styled-components';
import { colors } from '../../tokens';

const Container = styled.div`
  width: 345px;
  height: 100%;
  background-color: ${colors.white};
  display: flex;
  align-items: 'center';
  justify-content: space-around;
`;
const Wrapper = styled.div`
  align-items: 'center';
`;
const LogoBox = styled.div`
  width: 204px;
  height: 72px;
`;

export { Container, LogoBox, Wrapper };
