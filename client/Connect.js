import React from 'react';
import computerwoman from './images/computerwoman.png';
import headshot from './images/headshot.png';

const Connect = () => {
  return (
    <div className="container connect">
      <div id="connectDetails">
        <section className="container block">
          <div className="socialMediaContainer">
            <h3 style={{ textAlign: 'right' }}>
              Hey, let's connect! You're welcome to send me an email at{' '}
              <a href="mailto:katie.weinstein3@gmail.com" className="link">
                katie.weinstein3@gmail.com
              </a>
              .
            </h3>
            <img
              src={computerwoman}
              alt="A line drawing of a woman sitting at a laptop."
              id="computerWoman"
            />
          </div>
          <section className="lightBlock" id="socialMedia">
            <img
              src={headshot}
              alt="A picture of Katie with a red background where she is smiling."
              id="profilePicture"
            />
            <h3>Connect with me on social media!</h3>
          </section>
        </section>
      </div>
      <section className="container block" id="spotifyBlock">
        <h3 style={{ textAlign: 'center' }}>
          Listen to my Spotify playlist and code with me in spirit!
        </h3>
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
      </section>
    </div>
  );
};

export default Connect;
