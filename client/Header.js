import React from 'react';
import anime from 'animejs/lib/anime.es.js';

function expand() {
  anime({
    targets: '.headerText',
    scale: 1.15,
    duration: 500,
    easing: 'spring(1, 80, 10, 0)',
  });
}

function shrink() {
  anime({
    targets: '.headerText',
    scale: 1,
    duration: 500,
    easing: 'spring(1, 80, 10, 0)',
  });
}

class Header extends React.Component {
  render() {
    return (

    );
  }
}

export default Header;
