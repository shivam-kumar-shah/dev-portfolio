'use client';

import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from '../ui/ProjectTile';

import { DiMongodb, DiNodejs } from 'react-icons/di';
import { SiExpress, SiGraphql, SiMysql, SiPostman } from 'react-icons/si';

import SubHeading from '../ui/SubHeading';
import Heading from '../ui/Heading';
import { CarouselImages } from '../ui/CarouselImages';
import SkillTile from './SkillTile';
import { Page } from '../layout/Page';
import { Main } from '../layout/Main';
import { SkillsPane } from '../layout/SkillsPane';
import { ProjectsPane } from '../layout/ProjectsPane';
import { Project } from '../project';

export const Backend = () => {
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
    <Page id={'backend'}>
      <SubHeading className='text-center'>and a</SubHeading>
      <Heading className='text-center text-6xl'>Backend Web Developer</Heading>
      <div className='main flex h-full w-full flex-row'>
        <Main className='w-0'>
          <SkillsPane carousel={carousel}>
            <div
              className='backend-skills grid grid-cols-3 grid-rows-2 gap-4 transition-all ease-in-out'
              ref={ref}
            >
              <SkillTile showAnimation={showAnimation}>
                <DiNodejs size={'100%'} color='rgb(103, 187, 74)' />
              </SkillTile>
              <SkillTile showAnimation={showAnimation}>
                <SiExpress size={'100%'} color='white' />
              </SkillTile>
              <SkillTile showAnimation={showAnimation}>
                <DiMongodb size={'100%'} color='rgb(0, 230, 97)' />
              </SkillTile>
              <SkillTile showAnimation={showAnimation}>
                <SiMysql size={'100%'} color='rgb(0, 113, 139)' />
              </SkillTile>
              <SkillTile showAnimation={showAnimation}>
                <SiPostman size={'100%'} color='rgb(231, 106, 61)' />
              </SkillTile>
              <SkillTile showAnimation={showAnimation}>
                <SiGraphql size={'100%'} color='rgb(222, 51, 166)' />
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
              bringToFocus={() => bringToFocus(1)}
              projectType={'Express JS Typescript'}
              resetFocus={resetFocus}
              showAnimation={showAnimation}
              title={'bing news api'}
              className={'animated-tile-2 text-darkTextPrimary'}
              key={'bing news api'}
            />
          </ProjectsPane>
        </Main>
        <Project color='rgb(235, 235, 255)' />
      </div>
    </Page>
  );
};
