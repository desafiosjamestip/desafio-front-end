import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { setBool } from '../../../helpers/types';
import { buttonVariants, ButtonVariants } from './ButtonVariants';
import { SpaceBetween } from '../SpaceBetween';
import { ButtonStyle, ButtonText, LoadingIcon } from './Button.styles';
import { VariantsType } from '../Typography';
import { Center } from '../Center';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  wide?: boolean;
  variant?: ButtonVariants;
  noBorder?: boolean;
  type?: 'submit' | 'button';
  textVariant?: VariantsType;
  icon?: ReactNode;
  width?: string;
  height?: string;
  float?: 'left' | 'right' | 'none';
  margin?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  loading = false,
  disabled = false,
  wide = false,
  variant = 'default',
  type = 'button',
  noBorder = false,
  textVariant = 'button',
  icon = undefined,
  width = '152px',
  height = '45px',
  float = 'none',
  margin = '0',
  onClick = () => null,
  ...rest
}: ButtonProps) => {
  const loadingValue = setBool(loading);
  const ariaLabel: string | undefined =
    typeof children === 'string' ? children : rest['aria-label'];

  return (
    <ButtonStyle
      loading={loadingValue}
      aria-label={ariaLabel}
      disabled={disabled}
      noBorder={noBorder}
      type={type}
      variant={variant}
      wide={wide}
      width={width}
      float={float}
      height={height}
      margin={margin}
      onClick={onClick}
      {...rest}
    >
      <LoadingIcon
        data-testid="progress-indicator-svg"
        color={buttonVariants[variant].progressIndicatorColor}
      />
      {icon && children ? (
        <SpaceBetween direction="horizontal">
          <ButtonText variant={textVariant} align="left">
            {children}
          </ButtonText>
          {icon}
        </SpaceBetween>
      ) : icon && !children ? (
        <Center>{icon}</Center>
      ) : (
        <ButtonText variant={textVariant} align="center">
          {children}
        </ButtonText>
      )}
    </ButtonStyle>
  );
};

export type { ButtonProps };
export { Button };
