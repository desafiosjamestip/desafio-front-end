import styled from 'styled-components/macro';

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

const RowStyle = styled.div<{
  justifyContent: JustifyContentType;
  width: string;
  flexWrap: string;
}>`
  display: flex;
  flex-direction: row;
  width: ${({ width }) => width};
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;

export type { JustifyContentType };
export { RowStyle };
