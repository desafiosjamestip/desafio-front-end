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
      caret-color: ${colors.gray_200};
      border-bottom: 2px solid ${colors.green_200};
    `;
  }

  if (isInvalid && !disabled) {
    return css`
      caret-color: ${colors.error};
      border-bottom: 2px solid ${colors.error};
    `;
  }

  if (disabled) {
    return css`
      cursor: not-allowed;
      color: ${colors.disabled};
      border-bottom: 2px solid ${colors.disabled};
    `;
  }

  return css`
    border: 1px solid ${colors.green_200};
  `;
};

const inputLabelValidationStyles = ({
  isValid,
  isInvalid,
  disabled,
}: InputLabelProps) => {
  if (isValid && !disabled) {
    return `color: ${colors.primary};`;
  }
  if (isInvalid && !disabled) {
    return `color: ${colors.error}`;
  }

  if (disabled) {
    return `color: ${colors.gray_200}`;
  }

  return `color: ${colors.gray_200}`;
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
  border: solid 1px ${colors.green_200};
  height: 40px;
  background-color: ${colors.transparent};
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  color: ${colors.gray_200};
  font-size: ${fontSize.regular};
  font-weight: ${fontWeight.medium};
  ${InputWrapperValidationStyles};
  box-sizing: border-box;

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ disabled }) =>
      disabled ? colors.transparent : colors.gray_100};
  }
`;

const InputLabel = styled.label<InputLabelProps>`
  ${inputLabelValidationStyles};
  position: absolute;
  left: ${spaces.small};
  font-family: ${fontFamily.roboto};
  font-size: ${fontSize.paragraph};
  transition: 0.3s ease all;
  transform: translateY(-50%);
  pointer-events: none;
  ${({ isActive }) =>
    isActive
      ? css`
          top: ${spaces.small};
          font-size: 12px;
          color: ${colors.green_200};
        `
      : css`
          top: 50%;
        `}
`;

const InputField = styled.input`
  width: 100%;
  height: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.regular};
  color: ${colors.gray_200};

  &:disabled {
    cursor: not-allowed;
    color: ${colors.disabled};
  }
`;

const HintsWrapper = styled.div<HintsProps>`
  margin-top: ${spaces.xxSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ isInvalid }) => (isInvalid ? colors.error : colors.gray_200)};
  font-size: ${fontSize.paragraph};
`;

const CharactersCounter = styled.span`
  margin-right: ${spaces.small};
`;

const InputMessage = styled.span`
  margin-left: ${spaces.small};
`;

const Prefix = styled.span`
  margin-right: ${spaces.xxSmall};
  color: ${colors.gray_200};
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
    fill: ${colors.primary};
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
