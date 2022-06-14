import styled from 'styled-components/macro';
import { spaces } from '../../ui/tokens';

const BudgetHeader = styled.div`
  width: 100%;
  max-width: 488px;

  & > * {
    margin-bottom: ${spaces.xLarge};
  }
`;

export { BudgetHeader };
