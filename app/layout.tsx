'use client';
import Link from 'next/link';
import './globals.css';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(false);

  const navHandler = (to: number) => {
    window.scrollTo({
      top: to * window.visualViewport?.height!,
    });
  };

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <html lang='en' className='scroll-smooth text-xs sm:text-base'>
      <head>
        <link
          href='
https://cdn.jsdelivr.net/npm/source-sans-pro@3.6.0/source-sans-pro.min.css
'
          rel='stylesheet'
        ></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
      </head>

      <body className='flex h-fit flex-col bg-background font-body text-textPrimary'>
        <nav className='fixed left-1/2 top-4 z-50 mx-auto hidden -translate-x-1/2 flex-row px-8 py-4 sm:flex'>
          <ul className='flex flex-row gap-x-4  text-lg font-semibold text-textSecondary'>
            <li
              className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm '
              onClick={() => navHandler(0)}
            >
              Home
            </li>
            <li
              className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'
              onClick={() => navHandler(1.5)}
            >
              Frontend
            </li>
            <li
              className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'
              onClick={() => navHandler(2.9)}
            >
              Backend
            </li>
            <li
              className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'
              onClick={() => navHandler(4.3)}
            >
              Android
            </li>
            <li
              className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'
              onClick={() => navHandler(5.8)}
            >
              Flutter
            </li>
            <li
              className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'
              onClick={() => navHandler(7.2)}
            >
              Contact
            </li>
          </ul>
        </nav>
        <div
          onClick={toggleNav}
          className='fixed right-9  top-4 z-[49] h-8  w-8 cursor-pointer uppercase sm:hidden'
        >
          Menu
        </div>
        <nav
          className={`nav bg-bg pointer-events-none fixed z-[49] grid h-full w-screen place-items-center bg-background py-8 opacity-0 transition-all ${
            showNav && 'open'
          }`}
        >
          <ul className='flex flex-col gap-x-4 gap-y-2 text-center text-4xl font-semibold text-textSecondary'>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              <a href={'#intro'} onClick={toggleNav}>
                Home
              </a>
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              <a href={'#frontend'} onClick={toggleNav}>
                Frontend
              </a>
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              <a href={'#backend'} onClick={toggleNav}>
                Backend
              </a>
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              <a href={'#android'} onClick={toggleNav}>
                Android
              </a>
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              <a href={'#flutter'} onClick={toggleNav}>
                Flutter
              </a>
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              <a href={'#contact'} onClick={toggleNav}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div
          onClick={toggleNav}
          className={`bg-bg text-fontPrimary pointer-events-none fixed right-6 top-0 z-50  w-12 text-4xl opacity-0 transition-all ${
            showNav && 'close'
          }`}
        >
          &#10006;
        </div>
        <div className='pointer-events-none fixed -z-10 aspect-square w-[90vmax] translate-x-[10vw] translate-y-[-70%]  rounded-full border border-textPrimary bg-transparent transition-all duration-500 ease-in-out'></div>
        <div className='pointer-events-none fixed -z-10 aspect-square w-[90vmax] translate-x-[50vw] translate-y-[-50%]  rounded-full bg-primary transition-all duration-500 ease-in-out'></div>
        {children}
      </body>
    </html>
  );
}
