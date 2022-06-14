import React from 'react';
import { Typography, Center } from '../../ui/components';
import { Section } from '../Section';
import { BudgetForm } from '../BudgetForm';
import { BudgetHeader } from './Budget.styles';
import { spaces } from '../../ui/tokens';

const Budget = () => {
  const headerHeight = '75px';

  return (
    <Section
      id="Cadastro"
      padding={`calc(${headerHeight} + ${spaces.large}) ${spaces.large} ${spaces.xHuge}`}
    >
      <Center>
        <BudgetHeader>
          <Typography variant="subTitle" align="center">
            Cadastro de Produtos
          </Typography>
        </BudgetHeader>
        <BudgetForm />
      </Center>
    </Section>
  );
};

export { Budget };
