import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

const SkillTile = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`github-box-shadow absolute aspect-square w-24 -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow-2xl  shadow-backendTileGlow ${className}`}
    >
      {children}
    </div>
  );
};

export default SkillTile;
