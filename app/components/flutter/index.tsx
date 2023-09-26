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
import { IProject } from '@/app/model/IProject';
import { flutter } from '@/app/model/data';
import { Project } from '../project';

export const Flutter = () => {
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

  const carousel = flutter.map((item, index) => (
    <CarouselImages
      alt={item.title}
      isSelected={selectedIndex == index}
      src={item.imgSrc}
      key={item.title}
    />
  ));
  const projects = flutter.map((item, index) => (
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

  return (
    <Page id={'flutter'} ref={ref}>
      <SubHeading className='text-center'>and a</SubHeading>
      <Heading className='text-center text-6xl'>Flutter Developer</Heading>
      <div className='relative grid h-full w-full items-center'>
        <Main>
          <SkillsPane carousel={carousel}>
            <div className='relative  grid h-96 grid-cols-3 grid-rows-1 md:p-0'>
              <SkillTile
                className={`${showAnimation ? 'flutter-tile-secondary' : ''}`}
              >
                <SiDart size={'100%'} color='rgb(43, 177, 238)' />
              </SkillTile>
              <SkillTile
                className={`${
                  showAnimation ? 'flutter-tile-main' : ''
                } relative`}
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
