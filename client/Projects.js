import React from 'react';

const Projects = () => {
  return (
    <div className="container projects">
      <h1 className="section">Projects</h1>
      <section className="projectRow">
        <div className="projectImage">
          <a href="http://your-agenda.herokuapp.com">
            <img
              src="https://media.giphy.com/media/esFMsqzGaZ4mvWm4NB/giphy.gif"
              alt="A gif of tasks being dragged and dropped on my Agenda website."
            />
          </a>
        </div>
        <div className="container section">
          <h2>Agenda</h2>
          <h3>A minimalistic project board app.</h3>
        </div>
      </section>
    </div>
  );
};

export default Projects;
