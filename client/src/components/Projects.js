import React, { useState, useEffect } from 'react';

import ProjectsHeader from './ProjectsHeader';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const { data } = await response.json();

      setProjects(data.projects);
    };

    fetchProjects();
  }, []);

  const renderProjects = (projects) => {
    const components = projects.map((project, index) => {
      if (index % 2 === 0) {
        return <ProjectRight project={project} key={index} />;
      } else {
        return <ProjectLeft project={project} key={index} />;
      }
    });

    return components;
  };

  return (
    <React.Fragment>
      <ProjectsHeader />
      {renderProjects(projects)}
    </React.Fragment>
  );
};

export default Projects;
