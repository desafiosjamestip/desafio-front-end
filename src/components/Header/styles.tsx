import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  fontWeight: "bolder",
}));

export const HeaderContainer = styled(Box)`
  width: 100vw;
  height: 11vh;
  padding: 2vh;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  margin-bottom: 100px;
`;

export const HeaderNavigator = styled(Box)`
  width: 40%;
  max-width: 300px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
