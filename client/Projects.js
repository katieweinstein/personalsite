import React from 'react';
import writing from './images/writing.png';
import sneaker from './images/sneaker.png';

const Projects = () => {
  return (
    <div className="container projects">
      <h1 className="sectionTitle">Projects</h1>
      <section className="projectRow">
        <div className="container section">
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
            My team and I developed this project over the course of 2 weeks. We
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
        <a href="http://your-agenda.herokuapp.com" className="projectImage">
          <img
            src="https://media.giphy.com/media/esFMsqzGaZ4mvWm4NB/giphy.gif"
            alt="A gif of tasks being dragged and dropped on my Agenda website."
          />
        </a>
      </section>
      <section className="projectRow">
        <div className="container section">
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
              <button type="button">Download My Data</button>
            </a>
            <button
              type="button"
              onClick={() => (location.href = 'https://youtu.be/yHTqPAq9uYo')}
            >
              Demo Video
            </button>
          </div>
        </div>
        <a href="http://ontherun.herokuapp.com" className="projectImage">
          <img
            src="https://media.giphy.com/media/dkBz9l6vNUPq5JC6bD/giphy.gif"
            alt="A gif of my On The Run site in action."
          />
        </a>
      </section>
    </div>
  );
};

export default Projects;
