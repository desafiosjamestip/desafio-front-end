import { Button, Tooltip } from "@mui/material";
import { IButtonProps } from "../../interfaces";
import { NavLink } from "./styles";

export const InsertNavButton = ({ variant, size, color }: IButtonProps) => {
  return (
    <NavLink to="/insert">
      <Tooltip title="Add products to database">
        <Button variant={variant} size={size} color={color}>
          {" "}
          INSERT{" "}
        </Button>
      </Tooltip>
    </NavLink>
  );
};
