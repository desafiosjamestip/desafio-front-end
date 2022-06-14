import styled from 'styled-components/macro';
import { PaddingProps } from './Padding.d';

const PaddingStyle = styled.div<PaddingProps>`
  padding: ${({ padding }) => padding};
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
`;

export type { PaddingProps };
export { PaddingStyle };
