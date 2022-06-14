import React, { ReactNode } from 'react';
import { colors, spaces } from '../../ui/tokens';
import { SectionContainer, SectionWrapper } from './Section.styles';

type SectionProps = {
  children: ReactNode;
  id?: string;
  background?: string;
  padding?: string;
};

const Section = ({
  children,
  id,
  background = colors.transparent,
  padding = `0 ${spaces.large}`,
}: SectionProps) => {
  return (
    <SectionContainer id={id} background={background} padding={padding}>
      <SectionWrapper>{children}</SectionWrapper>
    </SectionContainer>
  );
};

export { Section };
