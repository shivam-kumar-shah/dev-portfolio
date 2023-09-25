import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export const SkillTile = ({
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`${className} github-box-shadow mx-auto aspect-square w-36 rounded-lg bg-backgroundBackendTile p-8 opacity-0 transition-all duration-500 ease-in-out md:w-4/5`}
    >
      {children}
    </div>
  );
};
