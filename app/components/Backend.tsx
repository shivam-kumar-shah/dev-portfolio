import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from './ProjectTile';

import { DiMongodb, DiNodejs } from 'react-icons/di';
import { SiExpress, SiGraphql, SiMysql, SiPostman } from 'react-icons/si';

import '../globals.css';

export const Backend = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const backendSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
        } else {
          setShowAnimation(false);
        }
      },
      {
        threshold: 0.4,
      }
    );
    observer.observe(backendSkillsRef.current!);
  }, []);

  return (
    <section className='sticky top-0 z-[40] mt-[40vh] h-screen w-screen overflow-hidden border-t-2 border-textPrimary bg-backgroundBackend px-4 pt-24'>
      <div className='mx-auto flex h-full w-screen max-w-6xl flex-col text-center'>
        <h2 className='text-base text-darkTextSecondary'>
          and a <br />
          <span className='mb-2 font-title text-6xl font-bold text-darkTextPrimary'>
            Backend Web Developer
          </span>
        </h2>
        <div className='grid grow grid-cols-2 content-around gap-x-8'>
          <div
            className='backend-skills grid grid-cols-3 grid-rows-2 gap-4'
            ref={backendSkillsRef}
          >
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-full -translate-x-full  rounded-lg  bg-backgroundBackendTile p-8 opacity-0 transition-all duration-500 ease-in-out `}
            >
              <DiNodejs size={'100%'} color='rgb(103, 187, 74)' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-full -translate-x-full rounded-lg bg-backgroundBackendTile p-12  opacity-0 transition-all duration-500 ease-in-out`}
            >
              <SiExpress size={'100%'} color='white' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-full -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out `}
            >
              <DiMongodb size={'100%'} color='rgb(0, 230, 97)' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-full -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out `}
            >
              <SiMysql size={'100%'} color='rgb(0, 113, 139)' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-full -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out `}
            >
              <SiPostman size={'100%'} color='rgb(231, 106, 61)' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-full -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out `}
            >
              <SiGraphql size={'100%'} color='rgb(222, 51, 166)' />
            </div>
          </div>
          <div className=' text-left text-2xl'>
            <h3 className='mb-4 font-title text-3xl font-bold  uppercase text-darkTextPrimary'>
              Projects
            </h3>
            <div className='h-full w-full'>
              <ProjectTile
                bringToFocus={() => {}}
                projectType={'Express JS MongoDB'}
                resetFocus={() => {}}
                showAnimation={showAnimation}
                title={'posts api'}
                className={['animated-tile-1', 'text-darkTextPrimary']}
                key={'posts api'}
              />
              <ProjectTile
                bringToFocus={() => {}}
                projectType={'Express JS Typescript'}
                resetFocus={() => {}}
                showAnimation={showAnimation}
                title={'bing news api'}
                className={['animated-tile-2', 'text-darkTextPrimary']}
                key={'bing news api'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
