import { ContainerSidebar, List } from '../../styles/components';
import {
  HomeIcon,
  MoneyIcon,
  RegisterIcon,
  CardsIcon,
  TransactionIcon,
} from '../../styles/icons';

const Sidebar = () => {
  return (
    <ContainerSidebar>
      <List
        items={[
          {
            title: 'Dashboard',
            href: '/#',
            icon: <HomeIcon />,
            cursor: 'none',
          },
          {
            title: 'Fluxo de caixa',
            href: '/#',
            icon: <MoneyIcon />,
            cursor: 'none',
          },
          {
            title: 'Cadastrar ',
            href: '/',
            icon: <RegisterIcon />,
            cursor: 'poiter',
          },
          {
            title: 'Lista produtos',
            href: './list',
            icon: <TransactionIcon />,
            cursor: 'poiter',
          },
          {
            title: 'Pagamentos',
            href: '/#',
            icon: <CardsIcon />,
            cursor: 'none',
          },
        ]}
      />
    </ContainerSidebar>
  );
};
export { Sidebar };
