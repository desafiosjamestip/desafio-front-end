import React, { ReactNode } from 'react';
import { Container } from './Grid.styles';
import { grid } from '../../tokens';

type GridContainerProps = {
  children: ReactNode;
  columns?: number;
  gutter?: number;
  noPadding: boolean;
};

const GridContainer = ({
  children,
  columns,
  gutter,
  noPadding,
}: GridContainerProps) => (
  <Container
    columns={Number(columns)}
    gutter={Number(gutter)}
    noPadding={noPadding}
  >
    {children}
  </Container>
);

GridContainer.defaultProps = {
  noPadding: false,
  ...grid,
};

export { GridContainer };
