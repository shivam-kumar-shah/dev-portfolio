import Image from 'next/image';

type Props = {
  isSelected: boolean;
  alt: String;
  src: String;
};

export const CarouselImages = ({ isSelected, alt, src }: Props) => {
  return (
    <div
      className={`${
        isSelected ? 'opacity-1 translate-y-0' : 'translate-y-full opacity-0'
      } display pointer-events-none absolute left-0 top-0 z-10  h-full w-full overflow-hidden bg-backgroundBackend transition-all  duration-500 ease-out sm:block`}
    >
      <img
        src={src.toString()}
        alt={alt.toString()}
        className='h-full w-full object-contain'
      />
    </div>
  );
};
