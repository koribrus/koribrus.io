import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './ProjectLeft.css';

const ProjectLeft = ({ project, img, alt }) => {
  const renderTechTags = (array) => {
    const techTags = array.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return techTags;
  };

  return (
    <div className='project project-l'>
      <div className='column-left'>
        <div className='project-heading'>
          <h5>{project.header[0]}</h5>
          <h4>{project.header[1]}</h4>
        </div>
        <div className='icons'>
          <FontAwesomeIcon icon={faGithub} className='icon' />
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' />
        </div>
        <div
          className='project-content'
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></div>
      </div>

      <div className='column-right'>
        <div className='project-img'>
          <a href='https://koribrus.photography/' rel='noreferrer' target='_blank'>
            <img src={`img/${project.img}`} alt={project.alt} />
          </a>
        </div>
        <div className='project-tags'>
          <ul>{renderTechTags(project.technologies)}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectLeft;
