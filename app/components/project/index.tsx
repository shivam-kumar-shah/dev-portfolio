import React, { useState } from 'react';
import { Main } from '../layout/Main';
import { RxOpenInNewWindow, RxGithubLogo, RxCross1 } from 'react-icons/rx';
import Heading from '../ui/Heading';
import SubHeading from '../ui/SubHeading';
import { IProject } from '@/app/model/IProject';
import Image from 'next/image';

type Props = {
  className?: string;
  closeProject: () => void;
  project: IProject | null;
};

export const Project = ({ project, className, closeProject }: Props) => {
  return (
    <div
      className={`absolute top-0 z-50 grid h-full w-full overflow-hidden transition-all duration-300 ease-in-out ${
        project ? 'left-0 bg-backgroundBackend' : 'left-full '
      }`}
    >
      {project && (
        <Main className='rounded-xl bg-backgroundBackendTile '>
          <div
            className='project__showcase relative grid h-full w-full items-center overflow-hidden p-4'
            style={{
              backgroundColor: project?.color,
            }}
          >
            <img
              src={project?.imgSrc}
              alt={project?.title}
              className='scale-125 transition-all duration-300 ease-in-out'
            />
            <a
              className='overlay'
              href=''
              target='_blank'
              title='project-title'
            >
              <RxOpenInNewWindow />
            </a>
          </div>
          <div className='project__showcase  h-full w-full overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-textSecondary'>
            <Heading className='flex flex-row items-center justify-between text-3xl'>
              {project?.title}
              <RxCross1
                className='cursor-pointer text-textSecondary transition-all ease-in-out hover:text-darkTextPrimary'
                onClick={closeProject}
              />
            </Heading>
            <div className='subtitle mt-2 flex flex-row items-center gap-x-6'>
              <a href={project?.deploymentLink} target='_blank'>
                <SubHeading className='flex flex-row items-center gap-x-2 hover:text-darkTextPrimary'>
                  <RxOpenInNewWindow />
                  Open in new tab
                </SubHeading>
              </a>
              <a href={project?.repoLink} target='_blank'>
                <SubHeading className='flex flex-row items-center gap-x-2 hover:text-darkTextPrimary'>
                  <RxGithubLogo />
                  Check out the repo
                </SubHeading>
              </a>
            </div>
            <div className='project__content mt-6 text-darkTextSecondary'>
              {project?.summary}
            </div>
          </div>
        </Main>
      )}
    </div>
  );
};
