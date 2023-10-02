import { IProject } from './IProject';

export const frontend: IProject[] = [
  {
    title: 'Online IDE',
    summary: `Online IDE is a web application designed for solving coding questions and writing and evaluating code. It provides an intuitive interface with a powerful code editor based on Microsoft's Monaco Editor. Users can write code, test it, and receive immediate feedback.

    This project uses React.js for the frontend, integrating the React Monaco Editor for the code editor. Tailwind CSS is employed for styling, ensuring a clean and responsive design. For routing within the application, React Router DOM is utilized.
    
    ## Features
    
    - Write and edit code in a user-friendly environment.
    - Solve coding questions with ease.
    - Immediate feedback on code evaluation.
    - Intuitive user interface for enhanced user experience.
    
    ## Technologies Used
    
    - React.js
    - React Monaco Editor
    - Tailwind CSS
    - React Router DOM
    - React Rewired
    - Webpack (configured with React Rewired)
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/online-ide',
    deploymentLink: 'https://online-7qzgxi8p9-shivam-kumar-shah.vercel.app/',
    imgSrc: '/projects/frontend/ide.png',
    color: 'rgb(27, 31, 36)',
    projectType: 'Code Editor - ReactJS',
  },
  {
    title: 'Messenger Clone',
    summary: `A real-time messaging application built with Next.js and TypeScript, inspired by Meta Messenger. This application leverages several modern technologies to provide users with a seamless messaging experience.

    ## Features
    
    * **Real-time Messaging**: Engage in real-time chat conversations with your friends and colleagues.
    
    * **Read Receipts**: Know when your messages have been read by the recipient.
    
    * **Online Notification**: Get notified when your friends are online and available for a chat.
    
    * **Media Upload**: Share images and other media files seamlessly using Cloudinary.
    
    * **Authentication and Authorization**: Secure your app with NextAuth for user authentication and authorization.
    
    * **Stunning UI**: Utilizes Tailwind CSS and its component library to ensure an attractive and responsive user interface.
    
    ## Tech Stack
    
    * **Next.js**: A React framework for building server-rendered web applications.
    
    * **TypeScript**: Adds static typing to JavaScript for better code quality.
    
    * **Prisma**: An ORM (Object-Relational Mapping) tool to work with databases.
    
    * **NextAuth**: Provides authentication and authorization capabilities.
    
    * **Socket_io**: Enables real-time, bidirectional communication between clients and the server.
    
    * **Cloudinary**: Cloud-based media management for image and video upload.
    
    * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/nextjs-chat-app',
    deploymentLink: 'https://nextjs-chat-app-six.vercel.app/',
    imgSrc: '/projects/frontend/chat.png',
    color: 'rgb(243, 244, 246)',
    projectType: 'Prisma/Pusher - NextJS',
  },
  {
    title: 'Comments CRUD',
    summary: `The Comments CRUD Frontend Application is a practice project built using React and SCSS. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on comments. The application is designed to provide hands-on experience with React, showcasing how to manage state, handle forms, and interact with an API. It is a valuable exercise for developers looking to sharpen their skills in frontend development.

    ## Features
    
    - **Create Comments**: Users can add new comments with a user-friendly form.
    
    - **Read Comments**: Existing comments are displayed in a clear and organized format.
    
    - **Update Comments**: Users have the ability to edit and update existing comments.
    
    - **Delete Comments**: Unwanted comments can be easily removed.
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/comments-frontend',
    deploymentLink: 'https://shivam-kumar-shah.github.io/comments-frontend',
    color: 'rgb(235, 235, 255)',
    imgSrc: '/projects/frontend/comments.png',
    projectType: 'CRUD - ReactJS',
  },
  {
    title: 'Password Generator',
    summary: `The Password Generator is a web-based tool built using HTML, CSS, JavaScript, and SCSS. It allows users to generate passwords of varying strengths, incorporating symbols and numeric characters. The application is designed to be fully responsive, ensuring a seamless user experience across different devices.

    ## Features
    
    - **Password Strength Options**: Choose from various options to generate passwords with different levels of complexity.
    
    - **Symbol and Numeric Symbols**: Include symbols and numeric characters in the generated passwords for enhanced security.
    
    - **Responsive Design**: The application is designed to adapt to different screen sizes, making it usable on desktops, tablets, and mobile devices.
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/password-generator',
    deploymentLink: 'https://shivam-kumar-shah.github.io/password-generator/',
    imgSrc: '/projects/frontend/password.png',
    color: 'rgb(25, 24, 32)',
    projectType: 'HTML/SCSS - Basics',
  },
  {
    title: 'Tic-Tac-Toe',
    summary: `The Tic-Tac-Toe Game is a web-based application built using React and Redux for state management. It provides a classic two-player Tic-Tac-Toe experience. This project demonstrates how to utilize React and Redux together for efficient state management in a game application.

    ## Features
    
    - **Two-Player Game**: Enjoy a classic game of Tic-Tac-Toe against another player.
    
    - **Interactive Gameplay**: Click to make your moves, and the game will track the progress.
    
    - **Win Detection**: The game automatically detects a winning move and declares a winner.
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/tic-tac-toe',
    deploymentLink: 'https://shivam-kumar-shah.github.io/tic-tac-toe/',
    imgSrc: '/projects/frontend/tic-tac-toe.png',
    color: 'rgb(26, 42, 51)',
    projectType: 'ReactJS/Redux',
  },
];
export const backend: IProject[] = [
  {
    title: 'Online IDE - Backend',
    summary: `The Express App is a specialized TypeScript-based backend designed to function as a robust code execution engine. Much like services like Judge0, it utilizes containerization to ensure the safe and secure execution of code. Through this technology, the app creates a controlled sandbox environment, guaranteeing the safety and reliability of the backend.

    ## Features
    
    - **TypeScript Environment**: The entire backend is written in TypeScript, providing enhanced code quality, readability, and error checking.
    
    - **RESTful Architecture**: Adheres to RESTful principles, providing a structured and predictable API for interaction with the frontend.
    
    - **Multi-Language Support**: The backend supports code execution multiple languages, providing flexibility for a wide range of applications.

    `,
    repoLink: 'https://github.com/shivam-kumar-shah/online-ide-backend',
    deploymentLink: 'https://github.com/shivam-kumar-shah/online-ide-backend',
    imgSrc: '/projects/backend/ide.png',
    color: 'rgb(0, 0, 0)',
    projectType: 'Code Engine - ExpressJS',
  },
  {
    title: 'One-For-All',
    summary: `One-for-All is a versatile RESTful API designed to serve as a common backend for all current and upcoming minor projects. Built entirely in TypeScript, it provides a solid foundation for various applications. The API leverages MongoDB Atlas for database storage, utilizing Mongoose as the Object-Document Mapper (ODM) for seamless interaction with the database. Authentication is handled through JSON Web Tokens (JWT) for secure access.

    This project is built on the Express framework and hosted on Cyclic, ensuring reliable and consistent performance.
    
    ## Features
    
    - RESTful architecture for easy integration with frontend applications.
    - Utilizes MongoDB Atlas for efficient and scalable database storage.
    - Written entirely in TypeScript for robustness and maintainability.
    - Authentication powered by JSON Web Tokens for secure access control.
    
    ## Technologies Used
    
    - TypeScript
    - Express.js
    - MongoDB Atlas
    - Mongoose (ODM)
    - JSON Web Tokens (JWT)
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/one-for-all/',
    deploymentLink: 'https://odd-cyan-yak-robe.cyclic.cloud/',
    imgSrc: '/projects/backend/one-for-all.png',
    color: 'rgb(0, 0, 0)',
    projectType: 'CRUD - ExpressJS',
  },
  {
    title: 'Posts API',
    summary: `The Posts API is a practice project that implements a RESTful API using Express.js, MongoDB, and Mongoose. It provides endpoints for managing posts, with authentication handled by JSON Web Tokens (JWT). This project serves as an excellent exercise for developers looking to enhance their skills in building APIs with Node.js and Express.

    ## Features
    
    - **Create, Read, Update, Delete (CRUD) Operations**: Perform basic CRUD operations on posts.
    
    - **Authentication with JWT**: Secure routes and authenticate users using JSON Web Tokens.
    
    - **MongoDB with Mongoose**: Utilize MongoDB as the database, managed with Mongoose for seamless integration.

    ## Usage

    1. Make requests to the API endpoints using a tool like Postman or via a front-end application.
    
    2. Use the provided authentication routes to obtain a JWT token for authorized access.
    
    3. Interact with the API to perform CRUD operations on posts.
    
    ## Technologies Used
    
    - Express.js
    - MongoDB
    - Mongoose
    - JSON Web Tokens (JWT)
    - JavaScript
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/posts-api/',
    deploymentLink: 'https://github.com/shivam-kumar-shah/posts-api/',
    imgSrc: '/projects/backend/posts-api.png',
    color: 'rgb(0, 0, 0)',
    projectType: 'REST API - ExpressJS',
  },
];
export const android: IProject[] = [
  {
    title: 'Project Title',
    summary: 'loremipsum',
    repoLink: 'https://nolink.com',
    deploymentLink: 'https://nolink.com',
    imgSrc: '/projects/frontend/1.png',
    color: 'rgb(235, 235, 255)',
    projectType: 'React JS UI/UX',
  },
];
export const flutter: IProject[] = [
  {
    title: 'bocchi.tv',
    summary: `Bocchi.tv is a cross-platform anime streaming application built using Flutter. It provides a seamless and user-friendly interface for anime enthusiasts to stream their favorite shows. This project is a labor of love and a true passion project. The app utilizes a self-hosted backend for data fetching and employs on-device web scraping using the HTML package to fetch stream URLs and episode lists from animepahe.com. The backend then processes the stream URLs into a usable format supported by Flutter.

    The application uses Provider as the state management library, SQLite as the on-device database for storing watch history and watchlist, and Consumit for some of the backend functionality.
    
    ## Features
    
    - Stream anime episodes seamlessly.
    - Store watch history and create a watchlist.
    - Cross-platform compatibility for Android and iOS.
    
    ## Technologies Used
    
    - Flutter
    - \`provider\` as a state management library
    - \`html\` package for web scraping
    - \`sqllite\` for on-device database
    - [consumet](https://github.com/consumet/consumet.ts) for backend integration
    
    ## Backend
    
    Backend is hosted at - [bocchi.tv Backend](https://relieved-cyan-tuxedo.cyclic.app/)
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/bocchi_flutter',
    deploymentLink: 'https://github.com/shivam-kumar-shah/bocchi_flutter',
    imgSrc: '/projects/flutter/bocchi.png',
    color: 'rgb(0, 0, 0)',
    projectType: 'Streaming - Flutter',
  },
  {
    title: 'ChatsApp',
    summary: `ChatsApp is a versatile cross-platform chat application built with Flutter. It offers both global and private chat functionalities, enabling users to communicate seamlessly. The app is backed by Cloud Firestore, ensuring real-time updates. User authentication is handled securely using Firebase's email and password authentication. State management is efficiently managed using the Provider library.

    ## Features
    
    - **Global and Private Chats**: Engage in both public group discussions and private one-on-one conversations with other users.
    
    - **Real-time Updates**: Cloud Firestore ensures that messages and chats are updated in real-time, providing a seamless chatting experience.
    
    - **Firebase Authentication**: Users can create accounts and log in securely using Firebase's email and password authentication system.
    
    - **Cross-platform**: The app is built using Flutter, making it compatible with both Android and iOS platforms.
    
    - **Efficient State Management**: Provider library is used for efficient state management, ensuring smooth performance.
    
    `,
    repoLink: 'https://github.com/shivam-kumar-shah/chats_app_flutter/',
    deploymentLink: 'https://github.com/shivam-kumar-shah/chats_app_flutter/',
    imgSrc: '/projects/flutter/chatsapp.png',
    color: 'rgb(0, 191, 99)',
    projectType: 'Firebase - Flutter',
  },
];
