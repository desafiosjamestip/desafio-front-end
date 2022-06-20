import { Box, StyledIcon } from "./style";
import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
interface ICartServiceProps {
  name: string;
  Icon: IconType;
  navigateStr: string;
}

export const CartService = ({ name, Icon, navigateStr }: ICartServiceProps) => {
  const navigate = useNavigate();

  return (
    <Box onClick={() => navigate(navigateStr)}>
      <StyledIcon>
        <Icon />
      </StyledIcon>
      <h4>{name}</h4>
    </Box>
  );
};
