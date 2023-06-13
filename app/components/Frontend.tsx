import React, { RefObject, useEffect, useRef, useState } from 'react';
import { ProjectTile } from './ProjectTile';
import { CarouselImages } from './CarouselImages';
import {
  SiJavascript,
  SiNextdotjs,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiBootstrap,
  SiTypescript,
} from 'react-icons/si';

type Props = {
  showCounter: boolean;
  skills: RefObject<HTMLDivElement>;
};

export const Frontend = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showAnimation, setShowAnimation] = useState(false);
  const frontendSkillsRef = useRef<HTMLDivElement>(null);

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
    observer.observe(frontendSkillsRef.current!);
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
    frontendSkillsRef.current?.classList.add('opacity-0');
    setSelectedIndex(index);
  }
  function resetFocus() {
    frontendSkillsRef.current?.classList.remove('opacity-0');
    setSelectedIndex(-1);
  }

  return (
    <>
      <img
        src='logo-circle.png'
        alt='Shivam Kumar'
        className={`${
          showAnimation ? 'hero-top' : 'hero-center'
        } fixed left-1/2 max-h-[90vh] max-w-[90vh] -translate-x-1/2 transition-all duration-500 ease-in-out sm:-translate-y-1/2  sm:translate-x-0 md:z-[45]`}
      />

      <section className='top-0 z-[40] mt-0 w-screen overflow-hidden border-t-2 border-textPrimary bg-backgroundBackend px-4 pt-24 sm:mt-[40vh] md:sticky md:h-screen'>
        <div className='mx-auto flex h-full  w-screen max-w-6xl flex-col text-center'>
          <h2 className='text-base text-darkTextSecondary'>
            Hi, I am a <br />
            <span className='mb-2 font-title text-6xl font-bold text-darkTextPrimary'>
              Frontend Web Developer
            </span>
          </h2>
          <div className='flex  grow flex-col gap-x-4 md:grid md:grid-cols-2'>
            <div className='side-display relative'>
              <div className='mt-24 h-96 md:mt-0 md:h-full'>
                {carousal}
                <div
                  className={`${
                    showAnimation ? 'skills-translate' : 'skills-bottom'
                  } relative  h-full rotate-45 transition-all duration-1000 ease-in-out`}
                  ref={frontendSkillsRef}
                >
                  <div
                    className={`github-box-shadow absolute left-1/2 top-1/2 grid aspect-square w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full `}
                  >
                    <span
                      className={`${
                        showAnimation ? 'animation-counter' : ''
                      } z-10 -rotate-45 font-title text-4xl text-darkTextPrimary`}
                    >
                      Skills
                    </span>
                    <div className=' github-box-shadow absolute bottom-full left-1/2 mb-12 aspect-square w-24 -translate-x-1/2 -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow-2xl  shadow-backendTileGlow'>
                      <SiJavascript
                        size={'100%'}
                        color='rgb(234, 212, 28)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </div>
                    <div className='github-box-shadow absolute left-1/2 top-full mt-12 aspect-square w-24 -translate-x-1/2 -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow shadow-backendTileGlow '>
                      <SiNextdotjs
                        size={'100%'}
                        color='white'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </div>
                    {/* horizontal */}
                    <div className=' github-box-shadow absolute -left-10 top-1/2 aspect-square w-24 -translate-x-full -translate-y-1/2 -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow shadow-backendTileGlow '>
                      <SiCss3
                        size={'100%'}
                        color='rgb(62, 100, 214)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </div>
                    <div className=' github-box-shadow absolute -right-10 top-1/2 aspect-square w-24 -translate-y-1/2 translate-x-full -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow shadow-backendTileGlow '>
                      <SiReact
                        size={'100%'}
                        color='rgb(0, 206, 242)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </div>
                    {/* diagonal left*/}
                    <div className=' github-box-shadow absolute left-1 top-3/4 aspect-square w-24 -translate-x-full translate-y-1/3 -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow shadow-backendTileGlow '>
                      <SiTailwindcss
                        size={'100%'}
                        color='rgb(7, 173, 202)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </div>
                    <div className=' github-box-shadow absolute -top-full left-0 aspect-square w-24 -translate-x-full translate-y-1/3 -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow shadow-backendTileGlow '>
                      <SiHtml5
                        size={'100%'}
                        color='rgb(242, 83, 32)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </div>
                    {/* diagonal right*/}
                    <div className='github-box-shadow absolute -right-full top-3/4 aspect-square w-24 -translate-x-8 translate-y-1/3 -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow shadow-backendTileGlow '>
                      <SiBootstrap
                        size={'100%'}
                        color='rgb(120, 16, 237)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </div>
                    <div className=' github-box-shadow absolute -right-full -top-full aspect-square w-24 -translate-x-8 translate-y-1/3 -rotate-45 rounded-full bg-backgroundBackendTile p-4 shadow shadow-backendTileGlow '>
                      <SiTypescript
                        size={'100%'}
                        color='rgb(46, 114, 188)'
                        className={showAnimation ? 'animation-counter' : ''}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-12 px-8 pt-12 text-left text-2xl md:my-0 md:mt-0 md:px-0 md:pt-24'>
              <h3 className='mb-4  font-title text-3xl font-bold uppercase text-darkTextPrimary md:px-0'>
                Projects
              </h3>
              <div className='h-full w-full'>
                <ProjectTile
                  bringToFocus={() => {
                    bringToFocus(0);
                  }}
                  projectType={'React JS UI/UX'}
                  resetFocus={resetFocus}
                  showAnimation={showAnimation}
                  title={'comments frontend'}
                  className={['animated-tile-1', 'text-darkTextPrimary']}
                  key={'comments frontend'}
                />
                <ProjectTile
                  bringToFocus={() => bringToFocus(1)}
                  projectType={'Vanilla JS'}
                  resetFocus={resetFocus}
                  showAnimation={showAnimation}
                  title={'password generator'}
                  className={['animated-tile-2', 'text-darkTextPrimary']}
                  key={'password generator'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
