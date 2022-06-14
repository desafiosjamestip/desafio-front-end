import styled, { css } from 'styled-components/macro';

const SpaceBetween = styled.div<{ direction: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  ${({ direction }) =>
    direction === 'vertical'
      ? css`
          height: 100%;
        `
      : css`
          width: 100%;
        `};
  justify-content: space-between;
`;

export { SpaceBetween };
