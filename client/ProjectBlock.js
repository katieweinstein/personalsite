import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ProjectBlock = (props) => {
  const project = props.project;
  return (
    <section className="projectRow">
      <div
        className="container block"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.alt} style={project.imageStyle} />
        <h3>
          <i>{project.tagline}</i>
        </h3>
        <p>{project.description}</p>
        <div className="buttons">
          <button
            type="button"
            onClick={() => (location.href = project.githubLink)}
          >
            GitHub
          </button>
          {project.downloadLink ? (
            <a href={project.downloadLink} download>
              <button type="button">⤓ Download My Data</button>
            </a>
          ) : null}
          {project.videoLink ? (
            <button
              type="button"
              onClick={() => (location.href = project.videoLink)}
            >
              Demo Video
            </button>
          ) : null}
        </div>
      </div>
      <figure data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
        <a href={project.websiteLink} className="projectImage">
          <img src={project.gifLink} alt={project.gifAlt} />
        </a>
        <button
          type="button"
          onClick={() => (location.href = project.websiteLink)}
        >
          Visit {project.title}
        </button>
        <p className="techStackList">
          <strong>
            <i>Tech Stack:</i>
          </strong>{' '}
          {project.techStack}
        </p>
      </figure>
    </section>
  );
};

export default ProjectBlock;
