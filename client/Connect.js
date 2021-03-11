import React from 'react';
import computerwoman from './images/computerwoman.png';

const Connect = () => {
  return (
    <div className="container connect">
      <section className="container block">
        <h3>
          Hey, let's connect! You're welcome send me an email at{' '}
          <a href="mailto:katie.weinstein3@gmail.com" className="link">
            katie.weinstein3@gmail.com
          </a>
          , or check out any of my social media.
        </h3>
        <img
          src={computerwoman}
          alt="A line drawing of a woman sitting at a laptop."
        />
      </section>
      <section className="container block" id="spotifyBlock">
        <h3>Listen to my Spotify playlist and code with me in spirit!</h3>
        <div id="spotify">
          <iframe
            src="https://open.spotify.com/embed/playlist/1dLvCe19oqDdr4a2SBCR38"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
      </section>
    </div>
  );
};

export default Connect;
