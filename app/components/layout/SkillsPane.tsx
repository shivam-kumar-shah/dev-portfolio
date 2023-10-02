import React, { PropsWithChildren, ReactNode } from 'react';

type Props = {
  className?: string;
  carousel: ReactNode[];
};

export const SkillsPane = ({
  children,
  carousel,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div className='relative my-8 flex h-full w-full items-center justify-center'>
      <div className='carousel'>{carousel}</div>
      {children}
    </div>
  );
};
