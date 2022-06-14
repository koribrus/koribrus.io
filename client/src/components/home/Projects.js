import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { load } from '../../redux/projects';
import Header from './Header';
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

  // * render deployment link
  const renderLink = (project) => {
    if (project.URL) {
      return (
        <a href={project.URL} rel='noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' />
        </a>
      );
    } else {
      return (
        <Link to={project.path} rel='noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' />
        </Link>
      );
    }
  };

  // * render tags
  const renderTags = (array) => {
    const techTags = array.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return techTags;
  };

  // * renderLink & renderTags passed in as props
  const renderProjects = (projects) => {
    const components = projects.map((project, index) => {
      if (index % 2 === 0) {
        return <ProjectRight project={project} link={renderLink} tags={renderTags} key={index} />;
      } else {
        return <ProjectLeft project={project} link={renderLink} tags={renderTags} key={index} />;
      }
    });

    return components;
  };

  return (
    <React.Fragment>
      <Header id='projects' heading='projects' />
      {renderProjects(projects)}
    </React.Fragment>
  );
};

export default Projects;
