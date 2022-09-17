import writing from './images/writing.png';
import sneaker from './images/sneaker.png';
import jeopardy from './images/jeopardy.png';

const projectData = [
  {
    id: 1,
    title: 'On The Run',
    image: sneaker,
    imageAlt: 'A line drawing of a sneaker in white.',
    imageStyle: { width: '20%' },
    tagline: 'Lifetime data visualization for runners who love data.',
    description: [
      "Inspired by my own love of running and the data that comes along with it, I developed this app to provide myself and other Garmin users with lifetime running data. It currently only works for Garmin users, so if you don't run or use a different running app, you can download my data below!",
      'I stored all of the data locally in data structures for quick and easy access - no database needed!',
    ],
    githubLink: 'https://github.com/katieweinstein/ontherun',
    downloadLink: 'KatieRunning.csv',
    videoLink: 'https://youtu.be/yHTqPAq9uYo',
    websiteLink: 'http://ontherun.herokuapp.com',
    imgLink: 'https://media.giphy.com/media/alVGPVWnCbmdIbMHoG/giphy.gif',
    imgAlt: 'A gif of my On The Run site in action.',
    techStack: 'Javascript, React, Redux, React Google Charts',
  },
  {
    id: 2,
    title: 'Jeopardy Scorekeeper',
    image: writing,
    imageAlt:
      'A line drawing of two hands on a piece of paper, one holding a pencil.',
    imageStyle: { width: '50%' },
    tagline:
      'Your new favorite scorekeeping app for at-home Jeopardy: sleek, simple, and fun.',
    description: [
      "Jeopardy is my family's go-to evening game whenever we spend time together. Most other Jeopardy scorekeeping apps are overcomplicated or difficult to use, so I designed my own. We now use it every time we play Jeopardy! Although the app is not out in the app store, you can check out my code below.",
      'This was my first time using Expo with React Native - it was a fun challenge and I enjoyed stepping out of my comfort zone!',
    ],
    githubLink: 'https://github.com/katieweinstein/JeopardyScorekeeper',
    imgLink: jeopardy,
    imgAlt: 'A collage of images from my Jeopardy app',
    techStack: 'React Native, SQLite, Expo',
  },
];

export default projectData;
