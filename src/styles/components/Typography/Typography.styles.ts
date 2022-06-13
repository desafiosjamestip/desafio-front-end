import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import {
  fontWeight as fontWeightTokens,
  fontSize,
  fontFamily,
} from '../../tokens';

interface TypographyBaseProps extends HTMLAttributes<HTMLParagraphElement> {
  color: string;
  align: 'left' | 'center' | 'right';
  fontWeight?: number;
  renderInline: boolean;
  cursor?: string;
  margin: string;
  upperCase?: boolean;
}

const TypographyBase = styled.p<TypographyBaseProps>`
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  display: ${({ renderInline }) => (renderInline ? 'inline' : 'block')};
  cursor: ${({ cursor }) => cursor};
  margin: ${({ margin }) => margin};
  ${({ upperCase }) =>
    upperCase
      ? css`
          text-transform: uppercase;
        `
      : ''};
`;

const TypographyTitle1 = styled(TypographyBase)`
  font-family: ${fontFamily.inter};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.bold};
  font-size: ${fontSize.title2};
  line-height: 33px;
`;

const TypographyTitle2 = styled(TypographyBase)`
  font-family: ${fontFamily.montserrat};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.black};
  font-size: ${fontSize.title2};
`;

const TypographyTitle3 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.regular};
  font-size: ${fontSize.title3};
`;

const TypographyButton1 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.bold};
  font-size: ${fontSize.button1};
  text-transform: uppercase;
`;

const TypographyButton2 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.regular};
  font-size: ${fontSize.button2};
  text-transform: uppercase;
`;

const TypographyLink = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.regular};
  font-size: ${fontSize.link};
  text-decoration: underline;
`;

const TypographyCaption = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.regular};
  font-size: ${fontSize.caption};
`;

const TypographyRegular1 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.regular};
  font-size: ${fontSize.regular1};
`;

const TypographyRegular2 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.regular};
  font-size: ${fontSize.regular2};
`;

const TypographyRegular3 = styled(TypographyBase)`
  font-family: ${fontFamily.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.bold};
  font-size: ${fontSize.regular2};
`;

const TypographyFootnote = styled(TypographyBase)`
  font-family: ${fontFamily.inter};
  font-weight: ${({ fontWeight }) => fontWeight || fontWeightTokens.medium1};
  font-size: ${fontSize.link};
  line-height: 22px;
`;

export {
  TypographyBase,
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
};
