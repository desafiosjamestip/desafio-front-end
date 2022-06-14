import styled from 'styled-components/macro';
import { Form, Item as GridItem } from '../../ui/components';
import { screens } from '../../ui/tokens';

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 488px;

  ${GridItem}:nth-child(2) {
    padding-right: 4px;

    @media only screen and (max-width: ${screens.sm}) {
      padding-right: 0;
    }
  }

  ${GridItem}:nth-child(4) {
    padding-left: 4px;

    @media only screen and (max-width: ${screens.sm}) {
      padding-right: 0;
    }
  }
`;

export { FormContainer };
