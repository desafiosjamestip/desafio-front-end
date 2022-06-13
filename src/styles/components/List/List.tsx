import { ReactNode } from 'react';
import { colors } from '../../tokens';
import { Typography } from '../Typography';
import { ContainerList, IconBox, ListItem, TextBox } from './List..styles';

interface ListProps {
  items?: Array<{
    title: string;
    href: string;
    icon: ReactNode;
    cursor: 'poiter' | 'none';
  }>;
}

const List = ({ items = [] }: ListProps) => {
  return (
    <ContainerList>
      {items?.map((item, key) => {
        return (
          <a href={item.href} key={key}>
            <ListItem cursor={item.cursor}>
              <IconBox>{item.icon}</IconBox>
              <TextBox>
                <Typography
                  variant="footnote"
                  cursor={item.cursor}
                  color={colors.gray_500}
                >
                  {item.title}
                </Typography>
              </TextBox>
            </ListItem>
          </a>
        );
      })}
    </ContainerList>
  );
};

export { List };
