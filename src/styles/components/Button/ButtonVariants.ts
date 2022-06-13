import { rgba } from 'polished';
import { colors, opacity } from '../../tokens';

const buttonVariants = {
  default: {
    backgroundColor: colors.transparent,
    borderColor: colors.green_500,
    backgroundColorDisabled: colors.red_500,
    backgroundColorHover: rgba(colors.green_500, opacity[5]),
    backgroundColorFocus: rgba(colors.green_500, opacity[4]),
    backgroundColorPressed: rgba(colors.green_500, opacity[3]),
    progressIndicatorColor: colors.green_500,
    textColor: colors.green_500,
  },
};

export type ButtonVariants = keyof typeof buttonVariants;
export { buttonVariants };
