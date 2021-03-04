import React from 'react';
import anime from 'animejs/lib/anime.es.js';

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

class Header extends React.Component {
  render() {
    return (
      <div className="container header">
        <h1 style={{ margin: '0px' }}>Katie Weinstein</h1>
        <h3>SOFTWARE ENGINEER</h3>
        <div className="logoContainer">
          <a href="https://www.linkedin.com/in/katie-weinstein/">
            <img
              src="linkedin.png"
              className="linkedin"
              onMouseOver={() => expand('linkedin')}
              onMouseOut={() => shrink('linkedin')}
              alt="LinkedIn logo"
            />
          </a>
          <a href="https://github.com/katieweinstein">
            <img
              src="github.png"
              className="github"
              onMouseOver={() => expand('github')}
              onMouseOut={() => shrink('github')}
              alt="GitHub logo"
            />
          </a>
          <a href="mailto:katie.weinstein3@gmail.com">
            <img
              src="email.png"
              className="email"
              onMouseOver={() => expand('email')}
              onMouseOut={() => shrink('email')}
              alt="email logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
