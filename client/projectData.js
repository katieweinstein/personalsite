import writing from './images/writing.png';
import sneaker from './images/sneaker.png';
import candles from './images/candles.png';

const projectData = [
  {
    id: 1,
    title: 'Agenda',
    image: writing,
    alt: 'A line drawing of someone writing on a piece of paper in white.',
    imageStyle: { width: '50%' },
    tagline:
      'A minimalistic project board app that does enough without doing too much.',
    description: [
      'Developed over a 2-week sprint in a team of four, this project is a fully functional project management board app for groups. We included features like drag and drop, real-time project board updates, and optional site-wide color themes.',
      'I implemented the drag and drop feature, contributed to a large portion of the layout and styling, and created the task forms.',
    ],
    githubLink: 'https://github.com/Super-Sweet-Starbursts/agenda',
    videoLink:
      'https://www.youtube.com/watch?v=9d15DFFVORs&list=PLx0iOsdUOUmnwv1vrUcoOhP736-omYGMN&index=9',
    websiteLink: 'http://your-agenda.herokuapp.com',
    gifLink: 'https://media.giphy.com/media/esFMsqzGaZ4mvWm4NB/giphy.gif',
    gifAlt: 'A gif of tasks being dragged and dropped on my Agenda website.',
    techStack:
      'Javascript, React, Redux, Material UI, Socket.io, Express, Sequelize, PostgreSQL',
  },
  {
    id: 2,
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
    gifLink: 'https://media.giphy.com/media/alVGPVWnCbmdIbMHoG/giphy.gif',
    gifAlt: 'A gif of my On The Run site in action.',
    techStack: 'Javascript, React, Redux, React Google Charts',
  },
  {
    id: 3,
    title: 'Tranquility',
    image: candles,
    alt: 'A line drawing of two lit candles in white.',
    imageStyle: { width: '30%' },
    tagline: 'A mock e-commerce site to browse a selection of candles.',
    description: [
      'This project was developed with two other teammates in less than a week. We focused on creating carts for both logged-in and guest users, and practiced with large amounts of dummy data to simulate a real-world e-commerce site with hundreds of products.',
      'I handled front-end component organization and styling, contributed to the structure of the database, and created the login and signup forms.',
    ],
    githubLink: 'https://github.com/Mighty-mighty-mangoes/Tranquility',
    websiteLink: 'http://tranquility-candles.herokuapp.com',
    gifLink: 'https://media.giphy.com/media/lVnhtZ5fxDkewKdG4l/giphy.gif',
    gifAlt: 'A gif of a candle being added to a cart on Tranquility.',
    techStack:
      'Javascript, React, Redux, Bootstrap, Express, Sequelize, PostgreSQL',
  },
];

export default projectData;
