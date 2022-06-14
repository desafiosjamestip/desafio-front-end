import { rgba } from 'polished';
import { colors, opacity } from '../../tokens';

const buttonVariants = {
  default: {
    backgroundColor: colors.transparent,
    borderColor: colors.green_400,
    backgroundColorDisabled: colors.disabled,
    backgroundColorHover: rgba(colors.green_200, opacity[5]),
    backgroundColorFocus: rgba(colors.green_200, opacity[4]),
    backgroundColorPressed: rgba(colors.green_200, opacity[3]),
    progressIndicatorColor: colors.green_400,
    textColor: colors.green_400,
  },
  solid: {
    backgroundColor: colors.green_400,
    borderColor: colors.green_200,
    backgroundColorDisabled: colors.disabled,
    backgroundColorHover: rgba(colors.green_200, opacity[1]),
    backgroundColorFocus: rgba(colors.green_200, opacity[2]),
    backgroundColorPressed: rgba(colors.green_200, opacity[3]),
    progressIndicatorColor: colors.white,
    textColor: colors.white,
  },
  white: {
    backgroundColor: colors.transparent,
    borderColor: colors.white,
    backgroundColorDisabled: colors.disabled,
    backgroundColorHover: rgba(colors.white, opacity[1]),
    backgroundColorFocus: rgba(colors.white, opacity[2]),
    backgroundColorPressed: rgba(colors.white, opacity[3]),
    progressIndicatorColor: colors.white,
    textColor: colors.white,
  },
};

export type ButtonVariants = keyof typeof buttonVariants;
export { buttonVariants };
