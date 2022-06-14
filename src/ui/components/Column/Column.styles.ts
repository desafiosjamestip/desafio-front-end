import styled from 'styled-components/macro';
import { screens } from '../../tokens';

type JustifyContentType =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'normal';

const ColumnStyle = styled.div<{
  justifyContent: JustifyContentType;
  height: string;
  flexWrap: string;
  width: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  @media only screen and (max-width: ${screens.sm}) {
    height: auto;
    width: auto;
  }
`;

export type { JustifyContentType };
export { ColumnStyle };
