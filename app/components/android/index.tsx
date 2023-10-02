'use client';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
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
import { Project } from '../project';
import { IProject } from '@/app/model/IProject';
import { android, backend } from '@/app/model/data';

export const Android = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showAnimation, setShowAnimation] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
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
        threshold: 0.4,
      }
    );
    observer.observe(ref.current!);
  }, []);

  const carousel = android.map((item, index) => (
    <CarouselImages
      alt={item.title}
      isSelected={selectedIndex == index}
      src={item.imgSrc}
      key={item.title}
    />
  ));
  const projects = android.map((item, index) => (
    <ProjectTile
      bringToFocus={() => {
        bringToFocus(index);
      }}
      project={item}
      resetFocus={resetFocus}
      showAnimation={showAnimation}
      className={'animated-tile-1 text-darkTextPrimary'}
      key={'comments frontend'}
      onClick={toggleProject}
    />
  ));

  return (
    <Page id={'android'} ref={ref}>
      <SubHeading className='text-center'>and an</SubHeading>
      <Heading className='text-center text-6xl'>Android Developer</Heading>
      <div className='relative grid h-full w-full items-center'>
        <Main>
          <SkillsPane carousel={carousel}>
            <div className='relative grid grid-cols-2 grid-rows-2 gap-32 '>
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

          <ProjectsPane>{projects}</ProjectsPane>
        </Main>
        <Project
          project={selectedProject}
          closeProject={() => setSelectedProject(null)}
        />
      </div>
    </Page>
  );
};
