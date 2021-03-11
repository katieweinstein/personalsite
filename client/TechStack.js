import React from 'react';
import techstack from './images/techstack.png';

const techStackArray = {};

const TechStack = () => {
  return (
    <div className="container techStack">
      <h1 className="sectionTitle">• Tech Stack •</h1>
      <section className="container">
        <div className="lightBlock">
          <img
            src={techstack}
            alt="An image with various logos in my tech stack."
          />
          <div className="techStackList" id="stackListContainer">
            <h3 className="noMargin">Proficient:</h3>
            <p>
              Javascript, React, Redux, Bootstrap, Material UI, Node, Express,
              Sequelize, PostgreSQL, SQL, Github, Git, HTML, CSS
            </p>
            <h3 className="noMargin">Knowledgeable:</h3>
            <p>Webpack, Python, Flask, SQLite, Heroku, C</p>
            <h3>
              Want more info? Take a look at my{' '}
              <a href="resume.pdf" className="link">
                resume
              </a>
              !
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
