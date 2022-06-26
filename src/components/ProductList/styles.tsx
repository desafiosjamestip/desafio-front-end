import { Box } from "@mui/material";
import styled from "styled-components";

export const ProductListContainer = styled(Box)`
  width: 90vw;
  padding-top: 10vh;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 3vh;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 780px) {
    flex-wrap: wrap;
  }
`;
