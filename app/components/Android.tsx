import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from './ProjectTile';

import { DiJava, DiMongodb, DiNodejs } from 'react-icons/di';
import { SiExpress, SiGraphql, SiJetpackcompose, SiKotlin, SiMaterialdesign, SiMysql, SiPostman, SiSqlite } from 'react-icons/si';
import {} from "react-icons/di"

import '../globals.css';


export const Android = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const androidSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        setShowAnimation(true);
      }else{
        setShowAnimation(false);
      }
    },{
      threshold:0.4,
    });
    observer.observe(androidSkillsRef.current!);
  }, []);

  return (
    <section className='sticky top-0 z-[40] mt-[40vh] h-screen w-screen overflow-hidden bg-backgroundBackend px-4 pt-24 border-t-2 border-textPrimary'>
      <div className='mx-auto flex h-full w-screen max-w-6xl flex-col text-center'>
        <h2 className='text-base text-darkTextSecondary'>
          and an <br />
          <span className='mb-2 font-title text-6xl font-bold text-darkTextPrimary'>
            Android Developer
          </span>
        </h2>
        <div className='grid grow grid-cols-2 content-around gap-x-8'>
          <div
            className='relative grid grid-cols-2 grid-rows-2 content-between gap-y-[100%] -translate-y-1/4'
            ref={androidSkillsRef}
          >
            <div className={`${showAnimation ? "android-tile": ""} github-box-shadow opacity-0 aspect-square w-1/2  translate-x-full translate-y-full  rounded-lg bg-backgroundBackendTile p-8 transition-all duration-500 ease-in-out `}>
              <DiJava size={'100%'} color='rgb(229, 31, 36)' />
            </div>
            <div className={`${showAnimation ? "android-tile": ""} github-box-shadow opacity-0 aspect-square w-1/2 -translate-x-full translate-y-full rounded-lg bg-backgroundBackendTile  p-12 transition-all duration-500 ease-in-out`}>
              <SiKotlin size={'100%'} color='rgb(144, 58, 232)' />
            </div>
            <div className={`${showAnimation ? "android-tile": ""} github-box-shadow opacity-0 aspect-square w-1/2 translate-x-full -translate-y-full rounded-lg bg-backgroundBackendTile p-12 transition-all duration-500 ease-in-out `}>
              <SiSqlite size={'100%'} color='rgb(15, 122, 196)' />
            </div>
            <div className={`${showAnimation ? "android-tile": ""} github-box-shadow opacity-0 aspect-square w-1/2 -translate-x-full -translate-y-full rounded-lg bg-backgroundBackendTile p-12 transition-all duration-500 ease-in-out `}>
              <SiJetpackcompose size={'100%'} color='rgb(49, 213, 133)'/>
            </div>
            <div className={`absolute w-1/4 top-1/2 right-1/2  github-box-shadow opacity-1 aspect-square   rounded-lg bg-backgroundBackendTile p-12 transition-all duration-500 ease-in-out `}>
              <SiMaterialdesign size={'100%'} color='white' />
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
