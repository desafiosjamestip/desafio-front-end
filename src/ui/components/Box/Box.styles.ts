import styled from 'styled-components/macro';

type BoxBaseProps = {
  width: string;
  height: string;
  justifyContent: string;
  alignItems: string;
  flexDirection: string;
  background?: string;
  margin?: string;
};

const BoxBase = styled.div<BoxBaseProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  background: ${({ background }) => background};
  margin: ${({ margin }) => margin};
`;

export { BoxBase };
