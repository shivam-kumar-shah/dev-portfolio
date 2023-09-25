import React, { PropsWithChildren } from 'react';

type Props = { className?: string };

export const Main = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`my-8 flex h-full flex-col items-center justify-around gap-y-12 overflow-hidden transition-all duration-300 ease-in-out md:my-auto md:h-4/5 md:flex-row md:gap-x-4 md:p-0 ${className}`}
    >
      {children}
    </div>
  );
};
