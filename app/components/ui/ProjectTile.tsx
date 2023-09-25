import { MouseEventHandler } from 'react';
import { HiArrowRight } from 'react-icons/hi';

type Props = {
  showAnimation: boolean;
  bringToFocus(): void;
  resetFocus(): void;
  title: String;
  projectType: String;
  className: string;
  href?: String;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const ProjectTile = ({
  bringToFocus,
  resetFocus,
  showAnimation,
  className,
  projectType,
  title,
  href = '',
  onClick,
}: Props) => {
  return (
    <a href={href.toString()} onClick={onClick}>
      <div
        className={`${
          showAnimation ? className : 'opacity-0'
        } tile relative top-1/2 flex cursor-pointer flex-row items-center gap-x-2 overflow-hidden border-t-4 border-textSecondary py-4`}
        onMouseEnter={bringToFocus}
        onMouseLeave={() => resetFocus()}
      >
        <HiArrowRight className='tile-leading -translate-x-8 ' />
        <div className='tile-title grow -translate-x-8 font-semibold '>
          {title}
        </div>
        <div className=''>{projectType}</div>
      </div>
    </a>
  );
};
