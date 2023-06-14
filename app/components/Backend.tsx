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
    <section id={"backend"} className='top-0 z-[40] mt-0 w-screen overflow-hidden border-t-2 border-textPrimary bg-backgroundBackend px-4 pt-24 md:sticky md:mt-[40vh] md:h-screen'>
      <div className='mx-auto flex h-full w-screen max-w-6xl flex-col text-center'>
        <h2 className='text-base text-darkTextSecondary'>
          and a <br />
          <span className='mb-2 font-title text-6xl font-bold text-darkTextPrimary'>
            Backend Web Developer
          </span>
        </h2>
        <div className='mt-10 flex grow flex-col content-around gap-x-8 md:mt-0 md:grid md:grid-cols-2 '>
          <div
            className='backend-skills mx-auto grid grid-cols-3 grid-rows-2 gap-4  md:mx-0'
            ref={backendSkillsRef}
          >
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-36 -translate-x-full  rounded-lg  bg-backgroundBackendTile  p-8 opacity-0 transition-all duration-500 ease-in-out md:w-full `}
            >
              <DiNodejs size={'100%'} color='rgb(103, 187, 74)' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-36 -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0  transition-all duration-500 ease-in-out md:w-full`}
            >
              <SiExpress size={'100%'} color='white' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-36 -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out md:w-full `}
            >
              <DiMongodb size={'100%'} color='rgb(0, 230, 97)' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-36 -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out md:w-full `}
            >
              <SiMysql size={'100%'} color='rgb(0, 113, 139)' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-36 -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out md:w-full `}
            >
              <SiPostman size={'100%'} color='rgb(231, 106, 61)' />
            </div>
            <div
              className={`${
                showAnimation ? 'backend-tile' : ''
              } github-box-shadow aspect-square w-36 -translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out md:w-full `}
            >
              <SiGraphql size={'100%'} color='rgb(222, 51, 166)' />
            </div>
          </div>
          <div className=' my-12 px-8 text-left text-2xl md:mt-0'>
            <h3 className='mb-4 font-title text-3xl font-bold  uppercase text-darkTextPrimary'>
              Projects
            </h3>
            <div className='z-50 h-full w-full'>
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
