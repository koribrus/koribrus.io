import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { load } from '../../redux/projects';

import ProjectsHeader from './ProjectsHeader';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';

const Projects = () => {
  const { projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const { data } = await response.json();

      stableDispatch(load(data.projects));
    };

    fetchProjects();
  }, [stableDispatch]);

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
