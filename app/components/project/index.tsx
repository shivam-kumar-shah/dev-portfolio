import React, { useState } from 'react';
import { Main } from '../layout/Main';
import { RxOpenInNewWindow, RxGithubLogo } from 'react-icons/rx';
import Heading from '../ui/Heading';
import SubHeading from '../ui/SubHeading';

type Props = {
  color: string;
};

export const Project = ({ color }: Props) => {
  return (
    <Main className='grow rounded-xl bg-backgroundBackendTile md:h-4/5'>
      <div
        className='project__showcase relative grid h-full w-full items-center overflow-hidden p-4'
        style={{
          backgroundColor: color,
        }}
      >
        <img
          src='projects/frontend/1.png'
          alt='img'
          className='scale-125 transition-all duration-300 ease-in-out'
        />
        <a className='overlay' href='' target='_blank' title='project-title'>
          <RxOpenInNewWindow />
        </a>
      </div>
      <div className='project__showcase  h-full w-full overflow-y-auto p-6'>
        <Heading className='text-3xl'>Project Title</Heading>
        <div className='subtitle mt-2 flex flex-row items-center gap-x-6'>
          <a href='' target='_blank'>
            <SubHeading className='flex flex-row items-center gap-x-2 hover:text-darkTextPrimary'>
              <RxOpenInNewWindow />
              Open in new tab
            </SubHeading>
          </a>
          <a href='' target='_blank'>
            <SubHeading className='flex flex-row items-center gap-x-2 hover:text-darkTextPrimary'>
              <RxGithubLogo />
              Check out the repo
            </SubHeading>
          </a>
        </div>
        <div className='project__content mt-6 text-darkTextSecondary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorum,
          asperiores itaque dolor odit debitis cum maxime mollitia illum totam
          ullam unde quas, quasi, harum molestiae excepturi error molestias
          voluptatum vero expedita commodi perferendis? Cum voluptatum accusamus
          id quisquam vitae maiores numquam facere dolorum? A nemo magnam
          ratione fugiat ducimus? Temporibus deserunt quia ullam vero beatae
          amet recusandae illum, officia autem veritatis, dignissimos neque quam
          possimus veniam harum consequatur error eius dolor provident vitae
          impedit dolorum. Eligendi repellat tempora ipsa quos iste, animi
          voluptatum similique modi maxime earum? Nobis, sequi laborum mollitia
          voluptatibus numquam rem veritatis ipsum provident alias cupiditate
          impedit quasi iure aliquid, explicabo ipsam qui doloremque temporibus?
          Qui voluptas repellat culpa omnis dolorum doloribus ipsum aliquam iure
          provident impedit, quibusdam odio illum totam earum fugiat, similique
          aspernatur corrupti quam quo delectus itaque alias beatae? Tempore
          consequuntur error illo veritatis rem, alias nulla impedit veniam,
          provident impedit, quibusdam odio illum totam earum fugiat, similique
          aspernatur corrupti quam quo delectus itaque alias beatae? Tempore
          consequuntur error illo veritatis rem, alias nulla impedit veniam,
          magni, at delectus repellat corporis quasi sequi facilis libero
          asperiores exercitationem vero aperiam accusamus itaque cum? Odio
          incidunt facere modi inventore, voluptatum cum repellendus delectus
          tenetur quidem perferendis assumenda reprehenderit cumque aspernatur
          dolores. Dolorum modi temporibus, quas laborum in delectus quasi
          voluptas veniam pariatur, possimus necessitatibus vitae minus,
          deleniti nulla sed? Nisi, veritatis tempore!fasdaffffffffffffffffff
        </div>
      </div>
    </Main>
  );
};
