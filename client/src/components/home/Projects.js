import React, { useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import useObserver from '../../hooks/useObserver';
import { setProjects } from '../../redux/visibility';
import { setProject1, setProject2, setProject3 } from '../../redux/visibility';
import { load } from '../../redux/projects';

import Header from './Header';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';
import './Projects.css';

const Projects = () => {
  // * state
  const { projects } = useSelector((state) => state.projects);
  const { projectsVisible } = useSelector((state) => state.visibility);
  const { desktop } = useSelector((state) => state.display);

  // * hooks
  const projectsRef = useRef();
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  // * useObserver custom hook for reveal on scroll
  useObserver(projectsRef, setProjects);

  // * fetch project data from node server
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const { data } = await response.json();

      stableDispatch(load(data.projects));
    };

    fetchProjects();
  }, [stableDispatch]);

  // * ----- RENDER FUNCTIONS -----
  // * deployment link
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

  // * tags
  const renderTags = (array) => {
    const techTags = array.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return techTags;
  };

  // * projects (renderLink & renderTags props)
  const renderProjects = (projects) => {
    const actionArray = [setProject1, setProject2, setProject3];

    const components = projects.map((project, index) => {
      if (index % 2 === 0) {
        return (
          <ProjectRight
            project={project}
            link={renderLink}
            tags={renderTags}
            index={index}
            action={actionArray[index]}
            desktop={desktop}
            key={index}
          />
        );
      } else {
        return (
          <ProjectLeft
            project={project}
            link={renderLink}
            tags={renderTags}
            index={index}
            action={actionArray[index]}
            desktop={desktop}
            key={index}
          />
        );
      }
    });

    return components;
  };

  return (
    <div ref={projectsRef} className={projectsVisible ? 'projects' : 'projects projects--hidden'}>
      <Header id='projects' heading='projects' />
      {renderProjects(projects)}
    </div>
  );
};

export default Projects;
