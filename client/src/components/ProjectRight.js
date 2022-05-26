import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './ProjectRight.css';
import fotositeImg from './../img/koribrus-photography.png';

const ProjectRight = ({ project }) => {
  const renderTechTags = (array) => {
    const techTags = array.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return techTags;
  };

  return (
    <div className='project project-r'>
      <div className='column-left'>
        <div className='project-img'>
          <a href='https://koribrus.photography/' rel='noreferrer' target='_blank'>
            <img src={fotositeImg} alt='screenshot of koribrus.photography' />
          </a>
        </div>
        <div className='project-tags'>
          <ul>{renderTechTags(project.technologies)}</ul>
        </div>
      </div>
      <div className='column-right'>
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
    </div>
  );
};

export default ProjectRight;
