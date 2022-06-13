import { ReactNode } from 'react';
import { PageWrapper } from './Page.styles';

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export { Page };
