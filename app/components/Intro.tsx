'use client';
import '../globals.css';

export default function Intro() {
  const navHandler = (to: number) => {
    window.scrollTo({
      top: to * window.visualViewport?.height!,
    });
  };
  return (
    <section
      id={'intro'}
      className='sticky top-0 mx-auto flex h-screen w-screen max-w-6xl flex-col items-center justify-center px-8 sm:flex-row'
    >
      <div className='intro '>
        <h2 className='text-base'>Hi, my name is</h2>
        <h1 className='mb-2 font-title text-6xl font-bold text-textPrimary'>
          Shivam Kumar
        </h1>
        <p className='mb-2 text-base'>Fullstack Web and Android Developer</p>
        <button
          className='border border-textPrimary px-8 py-4 font-title uppercase transition-all duration-200 ease-in-out hover:scale-110'
          onClick={() => navHandler(100)}
        >
          Get in touch
        </button>
      </div>
      <div className='aspect-square w-1/2'></div>
    </section>
  );
}
