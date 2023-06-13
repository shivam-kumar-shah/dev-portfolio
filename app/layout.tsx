import './globals.css';

export const metadata = {
  title: 'Shivam Kumar | Portfolio',
  description: "shivam-kumar-shah's Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='text-xs sm:text-base'>
      <link
        href='
https://cdn.jsdelivr.net/npm/source-sans-pro@3.6.0/source-sans-pro.min.css
'
        rel='stylesheet'
      ></link>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        href='https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap'
        rel='stylesheet'
      ></link>
      <body className='flex h-fit flex-col bg-background font-body text-textPrimary'>
        <nav className='fixed left-1/2 top-4 z-50 mx-auto hidden -translate-x-1/2 flex-row px-8 py-4 sm:flex'>
          <ul className='flex flex-row gap-x-4  text-lg font-semibold text-textSecondary'>
            <li className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm '>
              About
            </li>
            <li className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'>
              Experience
            </li>
            <li className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'>
              Work
            </li>
            <li className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'>
              Projects
            </li>
            <li className='cursor-pointer transition-all duration-200 ease-out hover:text-darkTextPrimary hover:drop-shadow-sm'>
              Contact
            </li>
          </ul>
        </nav>
        <div className='fixed right-9  top-4 z-[49] h-8  w-8 cursor-pointer uppercase sm:hidden'>
          Menu
        </div>
        <input
          type='checkbox'
          id='menuToggle'
          title='Show menu'
          className='menu fixed right-9 top-4  z-50 h-8 w-8 cursor-pointer opacity-0'
        />
        <nav className='nav bg-bg pointer-events-none fixed z-[49] grid h-full w-screen place-items-center bg-background py-8 opacity-0 transition-all'>
          <ul className='flex flex-col gap-x-4 gap-y-2 text-center text-4xl font-semibold text-textSecondary'>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              About
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              Experience
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              Work
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              Projects
            </li>
            <li className='w-72 cursor-pointer rounded py-2 text-center transition-all duration-200  ease-out hover:bg-textSecondary hover:text-darkTextPrimary hover:drop-shadow-sm'>
              Contact
            </li>
          </ul>
        </nav>
        <div className='close bg-bg text-fontPrimary pointer-events-none fixed right-6 top-0 z-50  w-12 text-4xl opacity-0 transition-all'>
          &#10006;
        </div>
        <div className='pointer-events-none fixed -z-10 aspect-square w-[90vmax] translate-x-[10vw] translate-y-[-70%]  rounded-full border border-textPrimary bg-transparent transition-all duration-500 ease-in-out'></div>
        <div className='pointer-events-none fixed -z-10 aspect-square w-[90vmax] translate-x-[50vw] translate-y-[-50%]  rounded-full bg-primary transition-all duration-500 ease-in-out'></div>
        {children}
      </body>
    </html>
  );
}
