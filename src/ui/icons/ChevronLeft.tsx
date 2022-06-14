import React, { SVGProps } from 'react';

const ChevronLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#FFFFFF"
      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
    </svg>
  );
};

export { ChevronLeft };
