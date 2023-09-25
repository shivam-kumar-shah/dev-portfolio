import React, { PropsWithChildren } from 'react';

type Props = { className?: string };

export const Main = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`mt-8 flex h-full flex-col items-center justify-around gap-y-12 sm:mt-0 md:my-auto md:h-3/5 md:flex-row md:gap-x-4 ${className}`}
    >
      {children}
    </div>
  );
};
