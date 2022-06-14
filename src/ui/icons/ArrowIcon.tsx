import React, { SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.772 0.885986L7.88599 6.77197L1 0.885986" stroke="#0AA494" />
    </svg>
  );
};

export { ArrowIcon };
