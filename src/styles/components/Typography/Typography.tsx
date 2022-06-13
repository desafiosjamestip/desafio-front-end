import { ReactNode, HTMLAttributes } from 'react';
import { colors } from '../../tokens';
import {
  TypographyTitle1,
  TypographyTitle2,
  TypographyTitle3,
  TypographyButton1,
  TypographyButton2,
  TypographyLink,
  TypographyCaption,
  TypographyRegular1,
  TypographyRegular2,
  TypographyRegular3,
  TypographyFootnote,
} from './Typography.styles';

const variants = {
  title1: TypographyTitle1,
  title2: TypographyTitle2,
  title3: TypographyTitle3,
  button1: TypographyButton1,
  button2: TypographyButton2,
  link: TypographyLink,
  caption: TypographyCaption,
  regular1: TypographyRegular1,
  regular2: TypographyRegular2,
  regular3: TypographyRegular3,
  footnote: TypographyFootnote,
};

export type VariantsType = keyof typeof variants;

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: VariantsType;
  color?: string;
  align?: 'left' | 'center' | 'right';
  fontWeight?: number;
  renderInline?: boolean;
  cursor?: string;
  margin?: string;
  upperCase?: boolean;
  htmlFor?: string;
}

const Typography = ({
  children,
  variant = 'regular1',
  align = 'left',
  renderInline = false,
  color = colors.black_500,
  cursor = 'auto',
  margin = '0',
  upperCase = undefined,
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
      upperCase={upperCase}
      {...rest}
    >
      {children}
    </Variant>
  );
};

export { Typography };
