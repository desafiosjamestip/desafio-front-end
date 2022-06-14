import React, { ReactNode, HTMLAttributes } from 'react';
import { colors } from '../../tokens';
import {
  TypographyTitle,
  TypographySubtitle,
  TypographyH3,
  TypographyRegular,
  TypographyButton,
  TypographyParagraph1,
  TypographyParagraph2,
  TypographyParagraph3,
} from './Typography.styles';

const variants = {
  title: TypographyTitle,
  subTitle: TypographySubtitle,
  h3: TypographyH3,
  regular: TypographyRegular,
  button: TypographyButton,
  paragraph1: TypographyParagraph1,
  paragraph2: TypographyParagraph2,
  paragraph3: TypographyParagraph3,
};

type VariantsType = keyof typeof variants;

type TypographyProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  variant?: VariantsType;
  color?: string;
  align?: 'left' | 'center' | 'right';
  fontWeight?: number;
  renderInline?: boolean;
  cursor?: string;
  margin?: string;
};

const Typography = ({
  children,
  variant = 'regular',
  align = 'left',
  renderInline = false,
  color = colors.blue_600,
  cursor = 'auto',
  margin = '0',
  ...rest
}: TypographyProps) => {
  const Variant = variants[variant];
  return (
    <Variant
      color={color}
      align={align}
      renderInline={renderInline}
      cursor={cursor}
      margin={margin}
      {...rest}
    >
      {children}
    </Variant>
  );
};

export type { VariantsType };
export { Typography };
