'use client';
import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from '../ui/ProjectTile';

import { DiJava } from 'react-icons/di';
import {
  SiJetpackcompose,
  SiKotlin,
  SiMaterialdesign,
  SiSqlite,
} from 'react-icons/si';

import { CarouselImages } from '../ui/CarouselImages';
import { Page } from '../layout/Page';
import SubHeading from '../ui/SubHeading';
import Heading from '../ui/Heading';
import { Main } from '../layout/Main';
import { SkillsPane } from '../layout/SkillsPane';
import { ProjectsPane } from '../layout/ProjectsPane';
import { SkillTile } from './SkillTile';

export const Android = () => {
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
    <Page id={'android'}>
      <SubHeading className='text-center'>and an</SubHeading>
      <Heading className='text-center text-6xl'>Android Developer</Heading>
      <Main>
        <SkillsPane carousel={carousel}>
          <div
            className='relative grid grid-cols-2 grid-rows-2 gap-32 '
            ref={ref}
          >
            <SkillTile showAnimation={showAnimation}>
              <DiJava size={'100%'} color='rgb(229, 31, 36)' />
            </SkillTile>
            <SkillTile showAnimation={showAnimation}>
              <SiKotlin size={'100%'} color='rgb(144, 58, 232)' />
            </SkillTile>
            <SkillTile showAnimation={showAnimation}>
              <SiSqlite size={'100%'} color='rgb(15, 122, 196)' />
            </SkillTile>
            <SkillTile showAnimation={showAnimation}>
              <SiJetpackcompose size={'100%'} color='rgb(49, 213, 133)' />
            </SkillTile>
            <SkillTile
              showAnimation={showAnimation}
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            >
              <SiMaterialdesign size={'100%'} color='white' />
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
    </Page>
  );
};
