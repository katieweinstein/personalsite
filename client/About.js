import React from 'react';

// Images
import sunflower from './images/sunflower1.png';
import skyline from './images/skyline.png';

const About = () => {
  return (
    <div className="intro">
      <img src={sunflower} />
      <section className="container section">
        <img
          src={skyline}
          alt="A line drawing of a city skyline in white."
          style={{ width: '100%' }}
        />
        <h2>
          Hi, I'm Katie! I'm a fullstack software engineer based in New York
          City.
        </h2>
        <p style={{ fontSize: 'large' }}>
          I'm a singer-actress turned web developer with a passion for
          problem-solving. In February, I graduted from the Grace Hopper Program
          at Fullstack Academy, and I'm currently in search of a role as a
          full-time developer in NYC. <br />
          <br />
          In the meantime, I challenged myself to create this portfolio website
          from scratch without a styling library. Not bad, huh? Feel free to
          scroll through and check out some of the work I've done!
        </p>
      </section>
    </div>
  );
};

export default About;
