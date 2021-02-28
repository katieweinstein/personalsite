import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Link } from 'react-router-dom';

function expand(type) {
  type = '.' + type;
  anime({
    targets: type,
    scale: 1.05,
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
      <div className="header">
        <h1>Katie Weinstein</h1>
        <h3>SOFTWARE ENGINEER</h3>
        <div className="logoContainer">
          <a href="https://www.linkedin.com/in/katie-weinstein/">
            <img src="linkedin.png" />
          </a>
          <a href="https://github.com/katieweinstein">
            <img src="github.png" />
          </a>
          <a href="mailto:katie.weinstein3@gmail.com">
            <img src="email.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
