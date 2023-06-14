import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from './ProjectTile';

import { DiJava, DiMongodb, DiNodejs } from 'react-icons/di';
import {
  SiExpress,
  SiGraphql,
  SiJetpackcompose,
  SiKotlin,
  SiMaterialdesign,
  SiMysql,
  SiPostman,
  SiSqlite,
} from 'react-icons/si';
import {} from 'react-icons/di';

import '../globals.css';

export const Android = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const androidSkillsRef = useRef<HTMLDivElement>(null);

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
    observer.observe(androidSkillsRef.current!);
  }, []);

  return (
    <section
      id={'android'}
      className='top-0 z-[40] mt-0 w-screen overflow-hidden border-t-2 border-textPrimary bg-backgroundBackend px-4 pt-24 md:sticky md:mt-[40vh] md:h-screen'
    >
      <div className='mx-auto flex h-full w-screen max-w-6xl flex-col text-center'>
        <h2 className='text-base text-darkTextSecondary'>
          and an <br />
          <span className='mb-2 font-title text-6xl font-bold text-darkTextPrimary'>
            Android Developer
          </span>
        </h2>
        <div className='mx-auto mt-10 flex grow flex-col content-around gap-x-8 md:mx-0 md:mt-0 md:grid md:grid-cols-2 '>
          <div
            className='relative grid h-96 grid-cols-2 grid-rows-2 content-between md:h-auto md:-translate-y-1/4 md:gap-y-[100%]'
            ref={androidSkillsRef}
          >
            <div
              className={`${
                showAnimation ? 'android-tile' : ''
              } github-box-shadow aspect-square w-32 translate-x-full translate-y-full  rounded-lg bg-backgroundBackendTile  p-8 opacity-0 transition-all duration-500 ease-in-out md:w-1/2 `}
            >
              <DiJava size={'100%'} color='rgb(229, 31, 36)' />
            </div>
            <div
              className={`${
                showAnimation ? 'android-tile' : ''
              } github-box-shadow aspect-square w-32 -translate-x-full translate-y-full rounded-lg bg-backgroundBackendTile p-12 opacity-0  transition-all duration-500 ease-in-out md:w-1/2`}
            >
              <SiKotlin size={'100%'} color='rgb(144, 58, 232)' />
            </div>
            <div
              className={`${
                showAnimation ? 'android-tile' : ''
              } github-box-shadow aspect-square w-32 -translate-y-full translate-x-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out md:w-1/2 `}
            >
              <SiSqlite size={'100%'} color='rgb(15, 122, 196)' />
            </div>
            <div
              className={`${
                showAnimation ? 'android-tile' : ''
              } github-box-shadow aspect-square w-32 -translate-x-full -translate-y-full rounded-lg bg-backgroundBackendTile p-12 opacity-0 transition-all duration-500 ease-in-out md:w-1/2 `}
            >
              <SiJetpackcompose size={'100%'} color='rgb(49, 213, 133)' />
            </div>
            <div
              className={`github-box-shadow opacity-1 absolute right-1/2 top-1/2 aspect-square w-32 -translate-y-3/4 translate-x-1/4 rounded-lg bg-backgroundBackendTile p-12   transition-all duration-500 ease-in-out md:w-1/4 md:translate-x-0 md:translate-y-0 `}
            >
              <SiMaterialdesign size={'100%'} color='white' />
            </div>
          </div>
          <div className='px-8 text-left text-2xl md:p-0'>
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
