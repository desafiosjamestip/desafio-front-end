import { HTMLAttributes } from 'react';
import styled from 'styled-components/macro';
import { fontFamily, fontWeight, fontSize } from '../../tokens';

type TypographyBaseProps = HTMLAttributes<HTMLParagraphElement> & {
  color: string;
  align: 'left' | 'center' | 'right';
  renderInline: boolean;
  cursor?: string;
  margin: string;
};

const TypographyBase = styled.p<TypographyBaseProps>`
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  display: ${({ renderInline }) => (renderInline ? 'inline' : 'block')};
  cursor: ${({ cursor }) => cursor};
  margin: ${({ margin }) => margin};
`;

const TypographyTitle = styled(TypographyBase)`
  font-family: ${fontFamily.merriweather};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.title};
  line-height: 48px;
`;

const TypographySubtitle = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.title};
  line-height: 40px;
`;

const TypographyH3 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.regular};
  text-transform: uppercase;
  line-height: 27px;
`;

const TypographyRegular = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.regular};
  line-height: 27px;
`;

const TypographyButton = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.paragraph};
  line-height: normal;
`;

const TypographyParagraph1 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.paragraph};
  line-height: 21px;
`;

const TypographyParagraph2 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.paragraph};
  line-height: 28px;
`;

const TypographyParagraph3 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.paragraph};
  line-height: 32px;
`;

export {
  TypographyTitle,
  TypographySubtitle,
  TypographyH3,
  TypographyRegular,
  TypographyButton,
  TypographyParagraph1,
  TypographyParagraph2,
  TypographyParagraph3,
};
