import { ReactNode } from 'react';

import { Container, LogoBox, Wrapper } from './ContainerSidebar.styles';

interface SidebarProps {
  logo?: ReactNode;
  children: ReactNode;
}
const ContainerSidebar = ({ logo, children }: SidebarProps) => {
  return (
    <Container>
      <Wrapper>
        <LogoBox>{logo}</LogoBox>
        {children}
      </Wrapper>
    </Container>
  );
};
export { ContainerSidebar };
