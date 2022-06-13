import styled, { css } from 'styled-components/macro';
import { colors, spaces, fontSize, fontWeight, fontFamily } from '../../tokens';

interface InputLabelProps {
  isInvalid: boolean;
  isValid: boolean;
  disabled: boolean;
  isActive: boolean;
}

interface InputWrapperProps {
  isInvalid: boolean;
  isValid: boolean;
  disabled: boolean;
  noPadding?: boolean;
}

interface HintsProps {
  isInvalid: boolean;
}

const InputWrapperValidationStyles = ({
  isValid,
  isInvalid,
  disabled,
}: InputWrapperProps) => {
  if (isValid && !disabled) {
    return css`
      caret-color: ${colors.gray_500};
    `;
  }

  if (isInvalid && !disabled) {
    return css`
      caret-color: ${colors.red_500};
    `;
  }

  if (disabled) {
    return css`
      cursor: not-allowed;
      color: ${colors.gray_100};
    `;
  }

  return css``;
};

const inputLabelValidationStyles = ({
  isValid,
  isInvalid,
  disabled,
}: InputLabelProps) => {
  if (isValid && !disabled) {
    return `color: ${colors.green_500};`;
  }
  if (isInvalid && !disabled) {
    return `color: ${colors.red_500}`;
  }
  if (isValid) {
    return `color: ${colors.red_500}`;
  }

  if (disabled) {
    return `color: ${colors.gray_100}`;
  }

  return `color: ${colors.gray_500}`;
};

const InputRoot = styled.div`
  position: relative;
`;

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  ${({ noPadding }) =>
    noPadding
      ? css`
          padding: ${spaces.none};
        `
      : css`
          padding: ${spaces.large} ${spaces.large} ${spaces.xSmall};
        `}
  display: flex;
  align-items: center;
  height: 85px;
  width: 452px;
  background-color: ${colors.transparent};
  transition: all 0.3s ease-in-out;
  color: ${colors.gray_500};
  font-size: ${fontSize.regular1};
  font-weight: ${fontWeight.medium};
  ${InputWrapperValidationStyles};
  box-sizing: border-box;
`;

const InputLabel = styled.label<InputLabelProps>`
  ${inputLabelValidationStyles};
  position: absolute;
  left: ${spaces.small};
  top: ${spaces.small};
  font-family: ${fontFamily.inter};
  font-size: ${fontSize.button1};
  font-weight: ${fontWeight.regular};
  transition: 0.3s ease all;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${colors.gray_500};
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${colors.transparent};
  outline: none;
  font-family: ${fontFamily.inter};
  font-weight: ${fontWeight.medium1};
  font-size: ${fontSize.button1};
  line-height: 22px;
  color: ${colors.black_500};
  border-radius: 40px;
  border: 1px solid #8e8ea1;
  padding: 10px;

  &:disabled {
    cursor: not-allowed;
    color: ${colors.gray_100};
  }
  &:hover,
  &:active,
  &:focus {
    background-color: ${({ disabled }) =>
      disabled ? colors.transparent : colors.gray_100};
  }
`;

const HintsWrapper = styled.div<HintsProps>`
  margin-top: ${spaces.xxSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ isInvalid }) => (isInvalid ? colors.red_500 : colors.gray_500)};
  font-size: ${fontSize.footnote};
`;

const CharactersCounter = styled.span`
  margin-right: ${spaces.small};
`;

const InputMessage = styled.span`
  margin-left: ${spaces.small};
`;

const Prefix = styled.span`
  margin-right: ${spaces.xxSmall};
  color: ${colors.gray_500};
`;

const TextFieldIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-left: ${spaces.medium};

  svg {
    fill: ${colors.green_500};
  }
`;

export {
  InputRoot,
  InputWrapper,
  InputLabel,
  InputField,
  HintsWrapper,
  InputMessage,
  CharactersCounter,
  Prefix,
  TextFieldIconButton,
};
