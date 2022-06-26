import { Box, Typography } from "@mui/material";
import {
  InsertNavButton,
  PageContainer,
  StockNavButton,
} from "../../components";

export const Home = () => {
  return (
    <PageContainer>
      <Typography variant="h2" align="center">
        Company Name
      </Typography>
      <Typography variant="h5">Products</Typography>
      <Box display="flex" gap={3}>
        <InsertNavButton variant="contained" size="large" color="primary" />
        <StockNavButton variant="contained" size="large" color="primary" />
      </Box>
    </PageContainer>
  );
};
