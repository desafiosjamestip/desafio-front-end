import { Card, CardContent as CC } from "@mui/material";

import { styled } from "@mui/material/styles";

export const FormContainer = styled(Card)`
  width: 90%;
  max-width: 400px;
`;

export const CardContent = styled(CC)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
