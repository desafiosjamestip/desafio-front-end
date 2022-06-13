import styled from 'styled-components';
import { colors } from '../../tokens';

interface ListItemProps {
  cursor: string;
}
const ContainerList = styled.ul`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  height: auto;
  max-height: 504px;
`;
const ListItem = styled.li<ListItemProps>`
  width: 252px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: ${({ cursor }) => cursor};

  &:hover,
  &:active,
  &:focus {
    p {
      color: ${colors.black_500};
    }
    svg {
      background-color: ${colors.gray_100};
      border-radius: 40px;
    }
  }
`;
const TextBox = styled.div`
  width: 190px;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 22px;
`;
const IconBox = styled.div`
  width: 60px;
  height: 60px;
`;

export { ContainerList, ListItem, IconBox, TextBox };
