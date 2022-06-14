import React, { SVGProps } from 'react';

const BurgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 1L1 1M23 7L1 7M23 13L1 13" stroke="#1B3351" />
    </svg>
  );
};

export { BurgerIcon };
