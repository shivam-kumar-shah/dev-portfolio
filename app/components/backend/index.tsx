'use client';

import { MouseEventHandler, useEffect, useRef, useState } from 'react';
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
import { IProject } from '@/app/model/IProject';
import { backend } from '@/app/model/data';

export const Backend = () => {
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

  const carousel = backend.map((item, index) => (
    <CarouselImages
      alt={item.title}
      isSelected={selectedIndex == index}
      src={item.imgSrc}
      key={item.title}
    />
  ));
  const projects = backend.map((item, index) => (
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
    <Page id={'backend'} ref={ref}>
      <SubHeading className='text-center'>and a</SubHeading>
      <Heading className='text-center text-6xl'>Backend Web Developer</Heading>
      <div className='relative grid h-full w-full items-center'>
        <Main>
          <SkillsPane carousel={carousel}>
            <div className='backend-skills grid grid-cols-3 grid-rows-2 gap-4 transition-all ease-in-out'>
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
