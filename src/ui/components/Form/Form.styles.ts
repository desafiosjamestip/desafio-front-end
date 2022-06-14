import styled from 'styled-components';
import { FormControlStyle } from '../FormControl/FormControl.styles';

const Form = styled.form`
  display: block;
  width: 100%;

  ${FormControlStyle} {
    width: 100%;
  }
`;

export { Form };
