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
        isSelected ? 'opacity-1 translate-y-0' : 'translate-y-full opacity-0'
      } display pointer-events-none absolute z-10 max-h-full w-[80vw] translate-x-[10vw] overflow-hidden rounded-t-xl  shadow-2xl shadow-backendTileGlow  transition-all duration-500 ease-out md:mt-24 md:w-full md:translate-x-0`}
    >
      <img
        src={src.toString()}
        alt={alt.toString()}
        className='h-full w-full object-contain md:object-cover'
      />
    </div>
  );
};
