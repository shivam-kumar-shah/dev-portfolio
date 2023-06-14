import { HiArrowRight } from 'react-icons/hi';

import '../globals.css';

type Props = {
  showAnimation: boolean;
  bringToFocus(): void;
  resetFocus(): void;
  title: String;
  projectType: String;
  className: String[];
  href?: String;
};

export const ProjectTile = ({
  bringToFocus,
  resetFocus,
  showAnimation,
  className,
  projectType,
  title,
  href = '',
}: Props) => {
  return (
    <a href={href.toString()} target='_blank'>
      <div
        className={`${
          showAnimation ? className.join(' ') : ' '
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
