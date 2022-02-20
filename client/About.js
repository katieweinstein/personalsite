import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Images
import katiepic from './images/katiepic.jpeg';
import skyline from './images/skyline.png';

const About = () => {
  return (
    <div className="intro">
      <img
        src={katiepic}
        alt="A digital drawing of me, Katie, smiling in a striped green shirt with my hair down."
        id="profilePic"
        data-aos="fade-right"
        data-aos-duration="1000"
      />
      <section
        className="container block"
        data-aos="flip-up"
        data-aos-duration="2000"
      >
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
          problem-solving, currently working as a software engineer. <br />
          <br />
          My experience in live theatre has given me the ability to think on my
          feet, communicate with my team (onstage and backstage!), and express
          my creativity. Now, I've changed my medium, and I've learned that live
          performance and web development have more in common than you'd think!
          <br />
          <br />
          If you know me, you'll know that I love a challenge. So I challenged
          myself to create this portfolio website from scratch without a
          template or styling library. Not bad, huh? Feel free to scroll through
          and check out some of the work I've done!
        </p>
      </section>
    </div>
  );
};

export default About;
