import React from 'react';

import '../globals.css';

type Props = {
  isSelected: boolean;
  alt: String;
  src: String;
};

export const CarouselImages = ({ isSelected, alt, src }: Props) => {
  return (
    <div
      className={`${
        isSelected ? 'translate-y-0' : 'translate-y-full'
      } display absolute shadow-2xl shadow-backendTileGlow z-10 mt-24 h-full w-full  overflow-hidden rounded-t-xl bg-red-500 transition-all duration-500 ease-out`}
    >
      <img
        src={src.toString()}
        alt={alt.toString()}
        className='h-full w-full object-cover'
      />
    </div>
  );
};
