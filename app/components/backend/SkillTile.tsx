import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
  showAnimation: boolean;
};

const SkillTile = ({
  children,
  className,
  showAnimation,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`${
        showAnimation ? 'backend-tile' : ''
      } github-box-shadow aspect-square w-36 -translate-x-full  rounded-lg  bg-backgroundBackendTile  p-8 opacity-0 transition-all duration-500 ease-in-out md:w-full `}
    >
      {children}
    </div>
  );
};

export default SkillTile;
