import React from 'react';

const Projects = () => {
  return (
    <div className="container projects">
      <h1 className="sectionTitle">Projects</h1>
      <section className="projectRow">
        <a href="http://your-agenda.herokuapp.com" className="projectImage">
          <img
            src="https://media.giphy.com/media/esFMsqzGaZ4mvWm4NB/giphy.gif"
            alt="A gif of tasks being dragged and dropped on my Agenda website."
          />
        </a>
        <div className="container section">
          <h1>Agenda</h1>
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
        </div>
      </section>
    </div>
  );
};

export default Projects;
