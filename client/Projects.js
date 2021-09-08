import React from 'react';
import projectData from './projectData';
import ProjectBlock from './ProjectBlock';

const Projects = () => {
  return (
    <div className="container projects">
      <h1 className="sectionTitle">• Projects •</h1>
      {projectData.map((project) => (
        <ProjectBlock project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
