import React from 'react';
import techstack from './images/techstack.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const TechStack = () => {
  return (
    <div className="container techStack">
      <h1 className="sectionTitle">• Tech Stack •</h1>
      <section className="container">
        <div
          className="lightBlock"
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <img
            src={techstack}
            alt="An image with various logos in my tech stack."
          />
          <div className="techStackList stackListContainer">
            <h3 className="noMargin">Proficient:</h3>
            <p>
              Typescript, Javascript, React, Redux, Jest, React Testing Library,
              Webpack, Mocha, Chai, Enzyme, Bootstrap, Material UI, Express,
              PostgreSQL, Sequelize, Node.js, SQL, Git, HTML, CSS, Storybook
            </p>
            <h3 className="noMargin">Knowledgeable:</h3>
            <p>SQLite, Python, Flask, C, PHP</p>
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
