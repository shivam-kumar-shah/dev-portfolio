import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

const SubHeading = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <h2 className={`text-base text-darkTextSecondary ${className}`}>
      {children}
    </h2>
  );
};

export default SubHeading;
