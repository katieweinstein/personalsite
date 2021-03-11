import React from 'react';
import writing from './images/writing.png';
import sneaker from './images/sneaker.png';
import candles from './images/candles.png';

const Projects = () => {
  return (
    <div className="container projects">
      <h1 className="sectionTitle">• Projects •</h1>
      <section className="projectRow">
        <div className="container block">
          <h1>Agenda</h1>
          <img
            src={writing}
            alt="A line drawing of someone writing on a piece of paper in white."
            style={{ width: '50%' }}
          />
          <h3>
            <i>
              A minimalistic project board app that does enough without doing
              too much.
            </i>
          </h3>
          <p>
            Developed over a 2-week sprint in a team of four, this project is
            fully functional project management board app for groups. We
            included features like drag and drop, real-time project board
            updates, and optional site-wide color themes.
            <br />
            <br />I implemented the drag and drop feature, contributed to a
            large portion of the layout and styling, and created the task forms.
          </p>
          <div className="buttons">
            <button
              type="button"
              onClick={() =>
                (location.href =
                  'https://github.com/Super-Sweet-Starbursts/agenda')
              }
            >
              GitHub
            </button>
            <button
              type="button"
              onClick={() =>
                (location.href =
                  'https://www.youtube.com/watch?v=9d15DFFVORs&list=PLx0iOsdUOUmnwv1vrUcoOhP736-omYGMN&index=9')
              }
            >
              Demo Video
            </button>
          </div>
        </div>
        <figure>
          <a href="http://your-agenda.herokuapp.com" className="projectImage">
            <img
              src="https://media.giphy.com/media/esFMsqzGaZ4mvWm4NB/giphy.gif"
              alt="A gif of tasks being dragged and dropped on my Agenda website."
            />
          </a>
          <button
            type="button"
            onClick={() => (location.href = 'http://your-agenda.herokuapp.com')}
          >
            Visit Agenda
          </button>
          <p className="techStackList">
            <strong>
              <i>Tech Stack:</i>
            </strong>{' '}
            Javascript, React, Redux, Material UI, Socket.io, Express,
            Sequelize, PostgreSQL
          </p>
        </figure>
      </section>
      <section className="projectRow">
        <div className="container block">
          <h1>On The Run</h1>
          <img
            src={sneaker}
            alt="A line drawing of a sneaker in white."
            style={{ width: '20%' }}
          />
          <h3>
            <i>Lifetime data visualization for runners who love data.</i>
          </h3>
          <p>
            Inspired by my own love of running and the data that comes along
            with it, I developed this app to provide myself and other Garmin
            users with lifetime running data. It currently only works for Garmin
            users, so if you don't run or use a different running app, you can
            download my data below!
            <br />
            <br />I stored all of the data locally in data structures for quick
            and easy access - no database needed!
          </p>
          <div className="buttons">
            <button
              type="button"
              onClick={() =>
                (location.href = 'https://github.com/katieweinstein/ontherun')
              }
            >
              GitHub
            </button>
            <a href="KatieRunning.csv" download>
              <button type="button">⤓ Download My Data</button>
            </a>
            <button
              type="button"
              onClick={() => (location.href = 'https://youtu.be/yHTqPAq9uYo')}
            >
              Demo Video
            </button>
          </div>
        </div>
        <figure>
          <a href="http://ontherun.herokuapp.com" className="projectImage">
            <img
              src="https://media.giphy.com/media/dkBz9l6vNUPq5JC6bD/giphy.gif"
              alt="A gif of my On The Run site in action."
            />
          </a>
          <button
            type="button"
            onClick={() => (location.href = 'http://ontherun.herokuapp.com')}
          >
            Visit On The Run
          </button>
          <p className="techStackList">
            <strong>
              <i>Tech Stack:</i>
            </strong>{' '}
            Javascript, React, Redux, React Google Charts, Express
          </p>
        </figure>
      </section>
      <section className="projectRow">
        <div className="container block">
          <h1>Tranquility</h1>
          <img
            src={candles}
            alt="A line drawing of two lit candles in white."
            style={{ width: '30%' }}
          />
          <h3>
            <i>A mock e-commerce site to browse a selection of candles.</i>
          </h3>
          <p>
            This project was developed with two other teammates in less than a
            week. We focused on creating carts for both logged-in and guest
            users, and practiced with large amounts of dummy data to simulate a
            real-world e-commerce site with hundreds of products.
            <br />
            <br />I handled front-end component organization and styling,
            contributed to the structure of the database, and created the login
            and signup forms.
          </p>
          <div className="buttons">
            <button
              type="button"
              onClick={() =>
                (location.href =
                  'https://github.com/Mighty-mighty-mangoes/Tranquility')
              }
            >
              GitHub
            </button>
          </div>
        </div>
        <figure>
          <a
            href="http://tranquility-candles.herokuapp.com"
            className="projectImage"
          >
            <img
              src="https://media.giphy.com/media/lVnhtZ5fxDkewKdG4l/giphy.gif"
              alt="A gif of a candle being added to a cart on Tranquility."
            />
          </a>
          <button
            type="button"
            onClick={() =>
              (location.href = 'http://tranquility-candles.herokuapp.com')
            }
          >
            Visit Tranquility
          </button>
          <p className="techStackList">
            <strong>
              <i>Tech Stack:</i>
            </strong>{' '}
            Javascript, React, Redux, Bootstrap, Express, Sequelize, PostgreSQL
          </p>
        </figure>
      </section>
    </div>
  );
};

export default Projects;
