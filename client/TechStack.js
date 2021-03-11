import React from 'react';
import techstack from './images/techstack.png';

const techStackArray = {};

const TechStack = () => {
  return (
    <div className="container techStack">
      <h1 className="sectionTitle">• Tech Stack •</h1>
      <section className="container">
        <div className="container lightBlock">
          <img
            src={techstack}
            alt="An image with various logos in my tech stack."
          />
        </div>
      </section>
    </div>
  );
};

export default TechStack;
