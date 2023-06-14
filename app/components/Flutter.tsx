'use client';

import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from './ProjectTile';

import { DiJava, DiMongodb, DiNodejs } from 'react-icons/di';
import {
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiJetpackcompose,
  SiKotlin,
  SiMaterialdesign,
  SiMysql,
  SiPostman,
  SiSqlite,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

import '../globals.css';
import { CarouselImages } from './CarouselImages';

export const Flutter = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const flutterSkillsRef = useRef<HTMLDivElement>(null);

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
    observer.observe(flutterSkillsRef.current!);
  }, []);

  const carousal = [
    <CarouselImages
      alt={'comments frontend'}
      isSelected={selectedIndex == 0}
      src={'projects/frontend/1.png'}
      key={'projects/frontend/1.png'}
    />,
    <CarouselImages
      alt={'password generator'}
      isSelected={selectedIndex == 1}
      src={'projects/frontend/2.png'}
      key={'projects/frontend/2.png'}
    />,
  ];

  function bringToFocus(index: number) {
    flutterSkillsRef.current?.classList.add('opacity-0');
    setSelectedIndex(index);
  }
  function resetFocus() {
    flutterSkillsRef.current?.classList.remove('opacity-0');
    setSelectedIndex(-1);
  }

  return (
    <section
      id={'flutter'}
      className='top-0 z-[40] mt-0 w-screen overflow-hidden border-t-2 border-textPrimary bg-backgroundBackend px-4 pt-24 md:sticky md:mt-[40vh] md:h-screen'
    >
      <div className='mx-auto flex h-full w-full max-w-6xl flex-col text-center'>
        <h2 className='text-base text-darkTextSecondary'>
          and a <br />
          <span className='mb-2 font-title text-6xl font-bold text-darkTextPrimary'>
            Flutter Developer
          </span>
        </h2>
        <div className='mt-10 flex grow flex-col content-around gap-x-8 md:mt-0 md:grid md:grid-cols-2 '>
          <div
            className='relative  grid h-96 grid-cols-3 grid-rows-1 md:p-0'
            ref={flutterSkillsRef}
          >
            <div
              className={`${
                showAnimation ? 'flutter-tile-secondary' : ''
              } github-box-shadow mx-auto aspect-square w-36 rounded-lg bg-backgroundBackendTile p-8 opacity-0 transition-all duration-500 ease-in-out md:w-4/5`}
            >
              <SiDart size={'100%'} color='rgb(43, 177, 238)' />
            </div>
            <div
              className={`${
                showAnimation ? 'flutter-tile-main' : ''
              } github-box-shadow relative mx-auto aspect-square w-36  rounded-lg bg-backgroundBackendTile p-8 opacity-0 transition-all duration-500 ease-in-out md:w-4/5 `}
            >
              <SiFlutter size={'100%'} color='rgb(69, 191, 243)' />
            </div>
            <div
              className={`${
                showAnimation ? 'flutter-tile-secondary' : ''
              } github-box-shadow mx-auto aspect-square w-36  rounded-lg bg-backgroundBackendTile p-8 opacity-0 transition-all duration-500 ease-in-out md:w-4/5 `}
            >
              <SiFirebase size={'100%'} color='rgb(244, 196, 61)' />
            </div>
          </div>
          <div className='px-8 text-left text-2xl md:px-0'>
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
