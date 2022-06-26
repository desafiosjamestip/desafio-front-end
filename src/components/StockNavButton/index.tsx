import { Button, Tooltip } from "@mui/material";
import { IButtonProps } from "../../interfaces";
import { NavLink } from "./styles";

export const StockNavButton = ({ variant, size, color }: IButtonProps) => {
  return (
    <NavLink to="/stock">
      <Tooltip title="View products in database">
        <Button variant={variant} size={size} color={color}>
          {" "}
          STOCK{" "}
        </Button>
      </Tooltip>
    </NavLink>
  );
};
