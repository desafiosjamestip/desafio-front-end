import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import useWindowDimensions from "../../utils/Window Dimension";
import { HeaderContainer, HeaderNavigator, Title } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuOpen, AddCircle, Inventory2 } from "@mui/icons-material";
import { InsertNavButton } from "../InsertNavButton";
import { StockNavButton } from "../StockNavButton";

export const Header = () => {
  const { width } = useWindowDimensions();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeaderContainer sx={{ backgroundColor: "primary.main" }}>
      <Title variant="h4" color="white">
        Company Name
      </Title>
      {width > 600 ? (
        <HeaderNavigator>
          <InsertNavButton variant="contained" size="small" color="secondary" />

          <StockNavButton variant="contained" size="small" color="secondary" />
        </HeaderNavigator>
      ) : (
        <>
          <IconButton
            onClick={handleClick}
            size="large"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {!open ? (
              <MenuIcon fontSize="large" htmlColor="white" />
            ) : (
              <MenuOpen fontSize="large" htmlColor="white" />
            )}
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <AddCircle /> <InsertNavButton />
            </MenuItem>
            <MenuItem>
              <Inventory2 /> <StockNavButton />
            </MenuItem>
          </Menu>
        </>
      )}
    </HeaderContainer>
  );
};
