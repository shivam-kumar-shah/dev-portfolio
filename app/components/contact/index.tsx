'use client';

import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from '../ui/ProjectTile';
import { Page } from '../layout/Page';
import SubHeading from '../ui/SubHeading';
import Heading from '../ui/Heading';
import { Main } from '../layout/Main';

export const Contact = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const contactRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.1,
      }
    );
    observer.observe(contactRef.current!);
  }, []);

  return (
    <Page id='contact'>
      <SubHeading className='text-center'>feel free to</SubHeading>
      <Heading className='text-center text-6xl'>Contact Me</Heading>
      <Main>
        <div className='px-12 md:px-0 lg:px-12' ref={contactRef}>
          <img
            src='logo-circle.png'
            alt='Shivam Kumar'
            className={'aspect-square w-full'}
          />
        </div>
        <div className=' my-12 px-8 text-left text-2xl md:mt-0'>
          <Heading className='text-3xl'>Email</Heading>
          <ProjectTile
            bringToFocus={() => {}}
            projectType={'Primary'}
            resetFocus={() => {}}
            showAnimation={showAnimation}
            title={'shivam-kumar-shah@outlook.com'}
            className={'contact-tile-1 text-darkTextPrimary'}
            href={
              'mailto:shivam-kumar-shah@outlook.com?subject=Lets work together🚀'
            }
          />
          <ProjectTile
            bringToFocus={() => {}}
            projectType={'Secondary'}
            resetFocus={() => {}}
            showAnimation={showAnimation}
            title={'shivam.shah2701@gmail.com'}
            className={'contact-tile-2 text-darkTextPrimary'}
            href={
              'mailto:shivam.shah2701@gmail.com?subject=Lets work together🚀'
            }
          />
          <h3 className='my-4 font-title text-3xl font-bold  uppercase text-darkTextPrimary'>
            Social Networks
          </h3>
          <ProjectTile
            bringToFocus={() => {}}
            projectType={'LinkedIn'}
            resetFocus={() => {}}
            showAnimation={showAnimation}
            title={'/shivam-kumar-shah'}
            className={'social-tile-1 text-darkTextPrimary'}
            href={'https://www.linkedin.com/in/shivam-kumar-shah/'}
          />
          <ProjectTile
            bringToFocus={() => {}}
            projectType={'GitHub'}
            resetFocus={() => {}}
            showAnimation={showAnimation}
            title={'/shivam-kumar-shah'}
            className={'social-tile-2 text-darkTextPrimary'}
            href={'https://github.com/shivam-kumar-shah/'}
          />
        </div>
      </Main>
    </Page>
  );
};
