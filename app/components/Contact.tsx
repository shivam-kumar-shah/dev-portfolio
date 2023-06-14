import { useEffect, useRef, useState } from 'react';
import { ProjectTile } from './ProjectTile';

import { DiMongodb, DiNodejs } from 'react-icons/di';
import { SiExpress, SiGraphql, SiMysql, SiPostman } from 'react-icons/si';

import '../globals.css';

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
        threshold: 0.4,
      }
    );
    observer.observe(contactRef.current!);
  }, []);

  return (
    <section
      id='contact'
      className='top-0 z-[40] mt-0 w-screen overflow-hidden border-t-2 border-textPrimary bg-backgroundBackend px-4 pt-24 md:sticky md:mt-[40vh] md:h-screen'
    >
      <div className='mx-auto flex h-full w-screen max-w-6xl flex-col text-center'>
        <h2 className='text-base text-darkTextSecondary'>
          feel free to
          <br />
          <span className='mb-2 font-title text-6xl font-bold text-darkTextPrimary'>
            Contact Me
          </span>
        </h2>
        <div className='mt-10 flex  grow flex-col content-around items-center justify-center gap-x-8 md:mt-0 md:grid md:grid-cols-2 '>
          <div className='grid place-items-center p-12' ref={contactRef}>
            <img
              src='logo-circle.png'
              alt='Shivam Kumar'
              className={'aspect-square w-full'}
            />
          </div>
          <div className=' my-12 px-8 text-left text-2xl md:mt-0'>
            <h3 className='mb-4 font-title text-3xl font-bold  uppercase text-darkTextPrimary'>
              Email
            </h3>
            <ProjectTile
              bringToFocus={() => {}}
              projectType={'Primary'}
              resetFocus={() => {}}
              showAnimation={showAnimation}
              title={'shivam-kumar-shah@outlook.com'}
              className={['text-darkTextPrimary', 'contact-tile-1']}
            />
            <ProjectTile
              bringToFocus={() => {}}
              projectType={'Secondary'}
              resetFocus={() => {}}
              showAnimation={showAnimation}
              title={'shivam.shah2701@gmail.com'}
              className={['text-darkTextPrimary', 'contact-tile-2']}
            />
            <h3 className='my-4 font-title text-3xl font-bold  uppercase text-darkTextPrimary'>
              Social Networks
            </h3>
            <ProjectTile
              bringToFocus={() => {}}
              projectType={'LinkedIn'}
              resetFocus={() => {}}
              showAnimation={showAnimation}
              title={'shivam-kumar-shah@outlook.com'}
              className={['text-darkTextPrimary', 'social-tile-1']}
            />
            <ProjectTile
              bringToFocus={() => {}}
              projectType={'GitHub'}
              resetFocus={() => {}}
              showAnimation={showAnimation}
              title={'shivam.shah2701@gmail.com'}
              className={['text-darkTextPrimary', 'social-tile-2']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
