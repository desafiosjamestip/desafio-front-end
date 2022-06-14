import React, { useMemo } from 'react';
import {
  ProgressIndicatorWrapper,
  ProgressIndicatorSvg,
  ProgressIndicatorPath,
} from './ProgressIndicator.styles';
import { colors } from '../../tokens';

const SVG_SIZE = 44;

type ProgressIndicatorProps = {
  size?: number;
  color?: string;
  borderWidth?: number;
};

const ProgressIndicator = ({
  size = 44,
  color = colors.primary,
  borderWidth = 3,
  ...rest
}: ProgressIndicatorProps) => {
  const viewBox = useMemo(() => {
    const x = SVG_SIZE / 2;
    const y = SVG_SIZE / 2;
    const w = SVG_SIZE;
    const h = SVG_SIZE;
    return `${x} ${y} ${w} ${h}`;
  }, []);

  return (
    <ProgressIndicatorWrapper size={size} {...rest}>
      <ProgressIndicatorSvg aria-label="Carregando" viewBox={viewBox}>
        <ProgressIndicatorPath
          r={(SVG_SIZE - borderWidth) / 2}
          cx={SVG_SIZE}
          cy={SVG_SIZE}
          color={color}
          strokeWidth={borderWidth}
          fill="none"
        />
      </ProgressIndicatorSvg>
    </ProgressIndicatorWrapper>
  );
};

export { ProgressIndicator };
