import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useObserver from '../../hooks/useObserver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectRight.css';

const ProjectRight = ({ project, link, tags, index, action }) => {
  // * state (variable calculated from props)
  const state = useSelector((state) => state.visibility);
  const projectState = state[`project${index + 1}Visible`];

  // * ref for changing classes on observe event
  const ref = useRef();

  useObserver(ref, action);

  return (
    <div
      ref={ref}
      className={projectState ? 'project project-r' : 'project project-r project--hidden'}
    >
      <div className='column-left'>
        <div className='project-img'>
          <a href='https://koribrus.photography/' rel='noreferrer' target='_blank'>
            {/* <img src={`img/${project.img}`} alt={project.alt} /> */}
            <video
              onMouseEnter={(e) => e.currentTarget.play()}
              src='vids/video-test.mp4'
              type='video/mp4'
              muted
              class='vid'
              // style='border: solid; width: 800px;'
            ></video>
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
