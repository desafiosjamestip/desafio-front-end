import { ReactNode } from 'react';
import { Item } from './Grid.styles';

type GridItemProps = {
  visible?: boolean;
  children?: ReactNode;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  lgOffset?: number;
  mdOffset?: number;
  smOffset?: number;
  xsOffset?: number;
};

const GridItem = ({
  children,
  lg = 1,
  lgOffset = 0,
  visible = true,
  ...rest
}: GridItemProps) => {
  const md = rest.md === undefined ? Number(lg) : rest.md;
  const sm = rest.sm === undefined ? md : rest.sm;
  const xs = rest.xs === undefined ? sm : rest.xs;
  const lgVisible = lg > 0;
  const mdVisible = md > 0;
  const smVisible = sm > 0;
  const xsVisible = xs > 0;
  const mdOffset =
    rest.mdOffset === undefined ? Number(lgOffset) : rest.mdOffset;
  const smOffset = rest.smOffset === undefined ? mdOffset : rest.smOffset;
  const xsOffset = rest.xsOffset === undefined ? smOffset : rest.xsOffset;
  const lgOffsetVisible = lgOffset > 0;
  const mdOffsetVisible = mdOffset > 0;
  const smOffsetVisible = smOffset > 0;
  const xsOffsetVisible = xsOffset > 0;

  return (
    <>
      <Item
        lg={lgOffset}
        md={mdOffset}
        sm={smOffset}
        xs={xsOffset}
        lgVisible={lgOffsetVisible}
        mdVisible={mdOffsetVisible}
        smVisible={smOffsetVisible}
        xsVisible={xsOffsetVisible}
        visible={visible}
      />
      <Item
        lg={lg}
        md={md}
        sm={sm}
        xs={xs}
        lgVisible={lgVisible}
        mdVisible={mdVisible}
        smVisible={smVisible}
        xsVisible={xsVisible}
        visible={visible}
      >
        {children}
      </Item>
    </>
  );
};

export { GridItem };
