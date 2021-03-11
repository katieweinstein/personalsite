import React from 'react';

const Connect = () => {
  return (
    <div className="container connect">
      <section className="container block">
        <h3>
          Hey, let's connect! You're welcome send me an email at{' '}
          <a href="mailto:katie.weinstein3@gmail.com">
            <i>katie.weinstein3@gmail.com</i>
          </a>
          , or check out any of my social media!
        </h3>
        <iframe
          src="https://open.spotify.com/embed/playlist/1dLvCe19oqDdr4a2SBCR38"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <form></form>
      </section>
    </div>
  );
};

export default Connect;
