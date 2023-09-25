import React, { PropsWithChildren } from 'react';

type Props = {};

export const ProjectsPane = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div className='h-full w-full px-8 text-2xl'>
      <h3 className='mb-4 font-title text-3xl font-bold  uppercase text-darkTextPrimary'>
        Projects
      </h3>
      <div className='z-50 h-full w-full'>{children}</div>
    </div>
  );
};
