import { StyledButton } from "./style";
interface IButton {
  text: string;
}
export const Button = ({ text }: IButton) => {
  return <StyledButton type="submit">{text}</StyledButton>;
};
