'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ContactTile } from './ContactTile';
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
    <Page id='contact' ref={contactRef}>
      <SubHeading className='text-center'>feel free to</SubHeading>
      <Heading className='text-center text-6xl'>Contact Me</Heading>
      <Main>
        <div className='px-12 md:px-0 lg:px-12'>
          <img
            src='/logo-circle.png'
            alt='Shivam Kumar'
            className={'aspect-square w-full'}
          />
        </div>
        <div className=' my-12 px-8 text-left text-2xl md:mt-0'>
          <Heading className='text-3xl'>Email</Heading>
          <ContactTile
            subtitle={'Primary'}
            showAnimation={showAnimation}
            title={'shivam-kumar-shah@outlook.com'}
            className={'contact-tile-1 text-darkTextPrimary'}
            href={
              'mailto:shivam-kumar-shah@outlook.com?subject=Lets work together🚀'
            }
          />
          <ContactTile
            subtitle={'Secondary'}
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
          <ContactTile
            subtitle={'LinkedIn'}
            showAnimation={showAnimation}
            title={'/shivam-kumar-shah'}
            className={'social-tile-1 text-darkTextPrimary'}
            href={'https://www.linkedin.com/in/shivam-kumar-shah/'}
          />
          <ContactTile
            subtitle={'GitHub'}
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
