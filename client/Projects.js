import React from 'react';

const Projects = () => {
  return (
    <div className="container projects">
      <h1 className="section">Projects</h1>
      <section className="projectRow">
        <iframe
          src="https://giphy.com/embed/esFMsqzGaZ4mvWm4NB"
          href="http://your-agenda.herokuapp.com"
          frameBorder="0"
          height="200px"
          width="300px"
          allowFullScreen
        />
        <div className="container section">
          <h2>Agenda</h2>
          <h3>A minimalistic project board app.</h3>
        </div>
      </section>
    </div>
  );
};

export default Projects;
