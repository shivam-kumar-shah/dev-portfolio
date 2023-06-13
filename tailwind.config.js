/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        shadowColor: 'rgb(241, 241, 242)',
        //light theme
        // primary: "rgb(255, 231, 147)",
        primary: '#E1341E',
        // background: "rgb(251, 252, 253)",
        background: '#1ECBE1',
        backgroundSecondary: 'rgb(205, 238, 255)',
        backgroundBackend: 'rgb(27, 31, 36)',
        backgroundBackendTile: 'rgb(36, 41, 47)',
        backendTileGlow: 'rgb(38, 57, 54)',
        textPrimary: 'rgb(69, 74, 79)',
        textSecondary: 'rgb(89, 97, 105)',
        //dark theme
        darkPrimary: 'rgb(105, 25, 255)',
        darkBackground: 'rgb(6, 9, 24)',
        darkTextPrimary: 'rgb(255, 255, 255)',
        darkTextSecondary: 'rgb(125, 133, 144)',
      },
      fontFamily: {
        body: 'Source Sans Pro',
        title: 'Exo\\ 2',
      },
    },
  },
  plugins: [],
};
