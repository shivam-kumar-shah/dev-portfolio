'use client';

import { MouseEvent, RefObject, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { CarouselImages } from '../ui/CarouselImages';
import { ProjectTile } from '../ui/ProjectTile';
import Heading from '../ui/Heading';
import SubHeading from '../ui/SubHeading';
import SkillTile from './SkillTile';
import { Main } from '../layout/Main';
import { Project } from '../project';

import { frontend } from '@/app/model/data';
import { IProject } from '@/app/model/IProject';

export const Frontend = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function bringToFocus(index: number) {
    setSelectedIndex(index);
  }
  function resetFocus() {
    setSelectedIndex(-1);
  }
  const toggleProject = (project: IProject) => {
    setSelectedProject(project);
  };

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
        threshold: 0.3,
      }
    );
    observer.observe(ref.current!);
  }, []);

  const carousel = frontend.map((item, index) => (
    <CarouselImages
      alt={item.title}
      isSelected={selectedIndex == index}
      src={item.imgSrc}
      key={item.title}
    />
  ));
  const projects = frontend.map((item, index) => (
    <ProjectTile
      bringToFocus={() => {
        bringToFocus(0);
      }}
      project={item}
      resetFocus={resetFocus}
      showAnimation={showAnimation}
      className={'animated-tile-1 text-darkTextPrimary'}
      key={'comments frontend'}
      onClick={toggleProject}
    />
  ));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <img
        src='/logo-circle.png'
        alt='Shivam Kumar'
        onClick={scrollToTop}
        className={`${
          showAnimation ? 'hero-top' : 'hero-center'
        } fixed left-1/2 max-h-[90vh] max-w-[90vh] -translate-x-1/2 transition-all duration-500 ease-in-out sm:-translate-y-1/2  sm:translate-x-0 md:z-[45]`}
      />

      <section
        id={'frontend'}
        ref={ref}
        className='top-0 z-[40] mt-0 h-full w-screen overflow-hidden border-t-2 border-textPrimary bg-backgroundBackend px-4 pt-24 sm:mt-[40vh] md:sticky md:h-screen'
      >
        <div className='mx-auto flex h-full min-h-screen w-full max-w-6xl flex-col'>
          <SubHeading className='text-center'>Hi, I am a</SubHeading>
          <Heading className='text-center text-6xl'>
            Frontend Web Developer
          </Heading>
          <div className='relative grid h-full w-full items-center'>
            <Main>
              <div className='skills__pane relative h-full w-full'>
                <div className='carousel'>{carousel}</div>
                <div
                  className={`${
                    showAnimation ? 'skills-translate' : 'skills-bottom'
                  } relative aspect-square w-full rotate-45 transition-all duration-1000 ease-in-out`}
                >
                  <div
                    className={`github-box-shadow absolute left-1/2 top-1/2 grid aspect-square w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full`}
                  >
                    <span
                      className={`${
                        showAnimation ? 'animation-counter' : ''
                      } z-10 -rotate-45 font-title text-4xl text-darkTextPrimary`}
                    >
                      Skills
                    </span>
                    <SkillTile className='bottom-full left-1/2 mb-12 -translate-x-1/2'>
                      <SiJavascript
                        size={'100%'}
                        color='rgb(234, 212, 28)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </SkillTile>
                    <SkillTile className='left-1/2 top-full mt-12 -translate-x-1/2'>
                      <SiNextdotjs
                        size={'100%'}
                        color='white'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </SkillTile>
                    {/* horizontal */}
                    <SkillTile className='-left-10 top-1/2 -translate-x-full -translate-y-1/2  '>
                      <SiCss3
                        size={'100%'}
                        color='rgb(62, 100, 214)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </SkillTile>
                    <SkillTile className='-right-10 top-1/2  -translate-y-1/2 translate-x-full  '>
                      <SiReact
                        size={'100%'}
                        color='rgb(0, 206, 242)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </SkillTile>
                    {/* diagonal left*/}
                    <SkillTile className='left-1 top-3/4  -translate-x-full translate-y-1/3  '>
                      <SiTailwindcss
                        size={'100%'}
                        color='rgb(7, 173, 202)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </SkillTile>
                    <SkillTile className='-top-full left-0  -translate-x-full translate-y-1/3  '>
                      <SiHtml5
                        size={'100%'}
                        color='rgb(242, 83, 32)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </SkillTile>
                    {/* diagonal right*/}
                    <SkillTile className='-right-full top-3/4  -translate-x-8 translate-y-1/3  '>
                      <SiBootstrap
                        size={'100%'}
                        color='rgb(120, 16, 237)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </SkillTile>
                    <SkillTile className='-right-full -top-full  -translate-x-8 translate-y-1/3  '>
                      <SiTypescript
                        size={'100%'}
                        color='rgb(46, 114, 188)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </SkillTile>
                  </div>
                </div>
              </div>
              <div className='h-full w-full px-8 text-2xl'>
                <h3 className='mb-4 font-title text-3xl font-bold uppercase text-darkTextPrimary md:px-0'>
                  Projects
                </h3>
                <div className='h-full w-full'>{projects}</div>
              </div>
            </Main>

            <Project
              project={selectedProject}
              closeProject={() => setSelectedProject(null)}
            />
          </div>
        </div>
      </section>
    </>
  );
};
