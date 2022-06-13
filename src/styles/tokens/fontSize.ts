const fontSize = {
  title1: '36px',
  title2: '24px',
  title3: '24px',
  button1: '18px',
  button2: '14px',
  regular1: '18px',
  regular2: '16px',
  link: '16px',
  caption: '14px',
  footnote: '12px',
} as const;

const typographyVariants = Object.keys(fontSize);

export { fontSize, typographyVariants };
