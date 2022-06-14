import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectRight.css';

const ProjectRight = ({ project, link, tags }) => {
  return (
    <div className='project project-r'>
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
