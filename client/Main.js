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

const Main = () => {
  return (
    <div className="header">
      <img
        src="cover.png"
        alt="A green background with white line drawings of flowers."
      />
      <div
        className="headerText"
        onMouseOver={() => expand()}
        onMouseOut={() => shrink()}
      >
        <h1>Katie Weinstein</h1>
        <h3>SOFTWARE DEVELOPER</h3>
      </div>
    </div>
  );
};

export default Main;
