import styled from "styled-components";

import { Link } from "react-router-dom";

export const Button = styled(Link)`
  width: 100%;
  display: block;
  background: #00cfb4;
  border: none;
  padding: 12px 24px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;
