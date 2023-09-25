import React, { PropsWithChildren } from 'react';

type Props = {
  id: string;
  className?: string;
};

export const Page = ({ children, id, className }: PropsWithChildren<Props>) => {
  return (
    <section
      id={id}
      className={`top-0 z-[40] mx-auto mt-0 flex h-fit min-h-screen w-full max-w-6xl flex-col overflow-hidden border-t-2 border-textPrimary bg-backgroundBackend px-4 pt-24 sm:h-screen md:sticky md:mt-[40vh] ${className}`}
    >
      {children}
    </section>
  );
};
