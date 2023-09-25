import { IProject } from '@/app/model/IProject';
import { MouseEvent } from 'react';
import { HiArrowRight } from 'react-icons/hi';

type Props = {
  showAnimation: boolean;
  bringToFocus(): void;
  resetFocus(): void;
  project: IProject;
  className: string;
  onClick: (project: IProject) => void;
};

export const ProjectTile = ({
  bringToFocus,
  resetFocus,
  showAnimation,
  className,
  project,
  onClick,
}: Props) => {
  return (
    <div
      className={`${
        showAnimation ? className : 'opacity-0'
      } tile relative top-1/2 flex cursor-pointer flex-row items-center gap-x-2 overflow-hidden border-t-4 border-textSecondary py-4`}
      onMouseEnter={bringToFocus}
      onMouseLeave={() => resetFocus()}
      onClick={() => onClick(project)}
    >
      <HiArrowRight className='tile-leading -translate-x-8 ' />
      <div className='tile-title grow -translate-x-8 font-semibold '>
        {project.title}
      </div>
      <div className=''>{project.projectType}</div>
    </div>
  );
};
