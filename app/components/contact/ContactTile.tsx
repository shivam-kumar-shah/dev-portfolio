import { MouseEventHandler } from 'react';
import { HiArrowRight } from 'react-icons/hi';

type Props = {
  showAnimation: boolean;
  title: string;
  subtitle: string;
  className: string;
  href?: string;
};

export const ContactTile = ({
  showAnimation,
  className,
  title,
  subtitle,
  href = '',
}: Props) => {
  return (
    <a href={href.toString()} target='_blank'>
      <div
        className={`${
          showAnimation ? className : 'opacity-0'
        } tile relative top-1/2 flex cursor-pointer flex-row items-center gap-x-2 overflow-hidden border-t-4 border-textSecondary py-4`}
      >
        <HiArrowRight className='tile-leading -translate-x-8 ' />
        <div className='tile-title grow -translate-x-8 font-semibold '>
          {title}
        </div>
        <div>{subtitle}</div>
      </div>
    </a>
  );
};
