import styled from 'styled-components/macro';
import { screens } from '../../tokens';

type ContainerProps = {
  gutter: number;
  columns: number;
  noPadding: boolean;
};

type ItemProps = {
  visible: boolean;
  lg: number;
  md: number;
  sm: number;
  xs: number;
  lgVisible: boolean;
  mdVisible: boolean;
  smVisible: boolean;
  xsVisible: boolean;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gutter }) => `${gutter}px`};
  padding: 0 ${({ gutter, noPadding }) => (noPadding ? 0 : gutter)}px;
`;

const Item = styled.div<ItemProps>`
  grid-column: span ${({ lg }) => lg};
  display: ${({ lgVisible, visible }) =>
    lgVisible ? (visible ? 'block' : 'none') : 'none'};

  @media only screen and (max-width: ${screens.md}) {
    grid-column: span ${({ md }) => md};
    display: ${({ mdVisible, visible }) =>
      mdVisible ? (visible ? 'block' : 'none') : 'none'};
  }

  @media only screen and (max-width: ${screens.sm}) {
    grid-column: span ${({ sm }) => sm};
    display: ${({ smVisible, visible }) =>
      smVisible ? (visible ? 'block' : 'none') : 'none'};
  }

  @media only screen and (max-width: ${screens.xs}) {
    grid-column: span ${({ xs }) => xs};
    display: ${({ xsVisible, visible }) =>
      xsVisible ? (visible ? 'block' : 'none') : 'none'};
  }
`;

export { Container, Item };
