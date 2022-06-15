import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useObserver from '../../hooks/useObserver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectRight.css';

const ProjectRight = ({ project, link, tags, index, action }) => {
  const state = useSelector((state) => state.visibility);
  const ref = useRef();

  const projectState = state[`project${index + 1}Visible`];

  useObserver(ref, action);

  return (
    // <div ref={ref} className='project project-r'>
    <div
      ref={ref}
      className={projectState ? 'project project-r' : 'project project-r project--hidden'}
    >
      <div className='column-left'>
        <div className='project-img'>
          <a href='https://koribrus.photography/' rel='noreferrer' target='_blank'>
            <img src={`img/${project.img}`} alt={project.alt} />
          </a>
        </div>
        <div className='project-tags'>
          <ul>{tags(project.technologies)}</ul>
        </div>
      </div>
      <div className='column-right'>
        <div className='project-heading'>
          <h5>{project.header[0]}</h5>
          <h4>{project.header[1]}</h4>
        </div>
        <div className='icons'>
          <a href={project.gitURL} rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faGithub} className='icon' />
          </a>
          {link(project)}
        </div>
        <div
          className='project-content'
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectRight;
