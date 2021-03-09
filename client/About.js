import React from 'react';

// Images
import katiepic from './images/katiepicblue.jpg';
import skyline from './images/skyline.png';

const About = () => {
  return (
    <div className="intro">
      <img
        src={katiepic}
        alt="A digital drawing of me, Katie, smiling in a striped green shirt with my hair down."
        className="profilePic"
      />
      <section className="container block">
        <img
          src={skyline}
          alt="A line drawing of a city skyline in white."
          style={{ width: '100%', margin: '10px 0px' }}
        />
        <h2 style={{ textAlign: 'center' }}>
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
          from scratch without a template or styling library. Not bad, huh? Feel
          free to scroll through and check out some of the work I've done!
        </p>
      </section>
    </div>
  );
};

export default About;
