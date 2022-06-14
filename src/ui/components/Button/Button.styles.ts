import styled from 'styled-components/macro';
import { ProgressIndicator } from '../ProgressIndicator';
import { Typography } from '../Typography';
import { colors, spaces, outline } from '../../tokens';
import { ButtonVariants, buttonVariants } from './ButtonVariants';

type ButtonStyleProps = {
  noBorder: boolean;
  wide: boolean;
  disabled: boolean;
  loading: boolean | number;
  variant: ButtonVariants;
  width: string;
  height: string;
  float: 'left' | 'right' | 'none';
  margin: string;
};

const ButtonText = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;
`;

const LoadingIcon = styled(ProgressIndicator).attrs({ size: 0 })`
  position: absolute;
  width: 24px;
  height: 24px;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
`;

const ButtonStyle = styled.button<ButtonStyleProps>`
  border: 1px solid;
  border-radius: ${({ noBorder }) => (noBorder ? '0' : '8px')};
  border-color: ${({ variant }) => buttonVariants[variant].borderColor};
  position: relative;
  padding: ${spaces.xxSmall};
  width: ${({ wide, width }) => (wide ? '100%' : width)};
  height: ${({ height }) => height};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  background-color: ${({ variant }) => buttonVariants[variant].backgroundColor};
  pointer-events: ${({ loading }) => (loading ? 'none' : 'auto')};
  transition: background-color 0.4s ease;
  float: ${({ float }) => float};
  margin: ${({ margin }) => margin};

  & svg {
    fill: ${({ variant }) => buttonVariants[variant].textColor};
  }

  & * {
    pointer-events: none;
  }

  ${LoadingIcon} {
    visibility: ${({ loading, disabled }) =>
      loading && !disabled ? 'visible' : 'hidden'};
  }

  ${ButtonText} {
    visibility: ${({ loading, disabled }) =>
      !loading || disabled ? 'visible' : 'hidden'};
    color: ${({ variant }) => buttonVariants[variant].textColor};
  }

  &:disabled {
    background-color: ${({ variant }) =>
      buttonVariants[variant].backgroundColorDisabled};

    & svg {
      fill: ${colors.disabled};
    }

    ${ButtonText} {
      color: ${colors.disabled};
    }
  }

  &:hover:not(:disabled) {
    background-color: ${({ variant }) =>
      buttonVariants[variant].backgroundColorHover};
  }

  &:focus:not(:disabled) {
    outline: ${outline.default};
    background-color: ${({ variant }) =>
      buttonVariants[variant].backgroundColorFocus};
  }

  &:active:not(:disabled) {
    background-color: ${({ variant }) =>
      buttonVariants[variant].backgroundColorPressed};
  }
`;

export { ButtonStyle, ButtonText, LoadingIcon };
