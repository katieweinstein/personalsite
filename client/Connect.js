import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Images
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import email from './images/email.png';
import computerwoman from './images/computerwoman.png';

function expand(type) {
  type = '.' + type;
  anime({
    targets: type,
    scale: 1.25,
    duration: 200,
    easing: 'spring(1, 80, 10, 0)',
  });
}

function shrink(type) {
  type = '.' + type;
  anime({
    targets: type,
    scale: 1,
    duration: 500,
    easing: 'spring(1, 80, 10, 0)',
  });
}

const Connect = () => {
  return (
    <div className="container connect">
      <section
        className="container block"
        id="spotifyConnectContainer"
        data-aos="flip-down"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <div className="socialMediaContainer">
          <h3>
            Hey, let's connect! You're welcome to send me an email at{' '}
            <a href="mailto:katie.weinstein3@gmail.com" className="link">
              katie.weinstein3@gmail.com
            </a>{' '}
            or shoot me a message on LinkedIn.
            <br />
            <br />
            Listen to my Spotify playlist and code with me in spirit!
          </h3>
          <img
            src={computerwoman}
            alt="A line drawing of a woman sitting at a laptop."
            id="computerWoman"
          />
          <div class="logoContainer">
            <a href="https://www.linkedin.com/in/katie-weinstein/">
              <img
                src={linkedin}
                className="linkedin"
                onMouseOver={() => expand('linkedin')}
                onMouseOut={() => shrink('linkedin')}
                alt="LinkedIn logo"
              />
            </a>
            <a href="https://github.com/katieweinstein">
              <img
                src={github}
                className="github"
                onMouseOver={() => expand('github')}
                onMouseOut={() => shrink('github')}
                alt="GitHub logo"
              />
            </a>
            <a href="mailto:katie.weinstein3@gmail.com">
              <img
                src={email}
                className="email"
                onMouseOver={() => expand('email')}
                onMouseOut={() => shrink('email')}
                alt="email logo"
              />
            </a>
          </div>
        </div>
        <div id="spotify">
          <iframe
            src="https://open.spotify.com/embed/playlist/1dLvCe19oqDdr4a2SBCR38"
            width="100%"
            height="100%"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
        {/* <img
              src={headshot}
              alt="A picture of Katie with a red background where she is smiling."
              id="profilePicture"
            /> */}
      </section>
    </div>
  );
};

export default Connect;
