'use client';

import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from '../ui/ProjectTile';

import { SiDart, SiFirebase, SiFlutter } from 'react-icons/si';

import { CarouselImages } from '../ui/CarouselImages';
import { Page } from '../layout/Page';
import SubHeading from '../ui/SubHeading';
import Heading from '../ui/Heading';
import { Main } from '../layout/Main';
import { SkillsPane } from '../layout/SkillsPane';
import { ProjectsPane } from '../layout/ProjectsPane';
import { SkillTile } from './SkillTile';

export const Flutter = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    observer.observe(ref.current!);
  }, []);

  const carousel = [
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
    ref.current?.classList.add('opacity-0');
    setSelectedIndex(index);
  }
  function resetFocus() {
    ref.current?.classList.remove('opacity-0');
    setSelectedIndex(-1);
  }

  return (
    <Page id={'flutter'}>
      <SubHeading className='text-center'>and a</SubHeading>
      <Heading className='text-center text-6xl'>Flutter Developer</Heading>
      <Main>
        <SkillsPane carousel={carousel}>
          <div
            className='relative  grid h-96 grid-cols-3 grid-rows-1 md:p-0'
            ref={ref}
          >
            <SkillTile
              className={`${showAnimation ? 'flutter-tile-secondary' : ''}`}
            >
              <SiDart size={'100%'} color='rgb(43, 177, 238)' />
            </SkillTile>
            <SkillTile
              className={`${showAnimation ? 'flutter-tile-main' : ''} relative`}
            >
              <SiFlutter size={'100%'} color='rgb(69, 191, 243)' />
            </SkillTile>
            <SkillTile
              className={`${showAnimation ? 'flutter-tile-secondary' : ''}`}
            >
              <SiFirebase size={'100%'} color='rgb(244, 196, 61)' />
            </SkillTile>
          </div>
        </SkillsPane>
        <ProjectsPane>
          <ProjectTile
            bringToFocus={() => bringToFocus(0)}
            projectType={'Express JS MongoDB'}
            resetFocus={resetFocus}
            showAnimation={showAnimation}
            title={'posts api'}
            className={'animated-tile-1 text-darkTextPrimary'}
            key={'posts api'}
          />
          <ProjectTile
            bringToFocus={() => bringToFocus(0)}
            projectType={'Express JS Typescript'}
            resetFocus={resetFocus}
            showAnimation={showAnimation}
            title={'bing news api'}
            className={'animated-tile-2 text-darkTextPrimary'}
            key={'bing news api'}
          />
        </ProjectsPane>
      </Main>
    </Page>
  );
};
