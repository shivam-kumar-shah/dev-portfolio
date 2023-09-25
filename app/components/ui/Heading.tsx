import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

const Heading = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <h2
      className={`mb-2 font-title font-bold text-darkTextPrimary ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
