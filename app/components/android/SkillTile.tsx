import React, { PropsWithChildren } from 'react';

type Props = {
  showAnimation: boolean;
  className?: string;
};

export const SkillTile = ({
  showAnimation,
  children,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`${
        showAnimation ? 'android-tile' : ''
      } github-box-shadow ml-auto aspect-square w-32  rounded-lg bg-backgroundBackendTile  p-8  transition-all duration-500 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
};
