import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useObserver from '../../hooks/useObserver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectRight.css';

const ProjectRight = ({ project, link, tags, index, action, desktop }) => {
  // * state from visibility.js, in conjunction with the useObserver custom hook, drives the scroll into view transitions of each component (projectState variable is a string constructed from visibiility state object and the index passed to ProjectRight from props)
  const state = useSelector((state) => state.visibility);
  const projectState = state[`project${index + 1}Visible`];

  // * ref for changing classes on observe event
  const ref = useRef();

  // * useObserver custom hook for reveal on scroll
  useObserver(ref, action);

  // * desktop is a prop passed in from Projects.js indicating if the viewport is in desktop or mobile size (boolean)
  const renderProject = () => {
    if (desktop) {
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
                  onMouseLeave={(e) => e.currentTarget.pause()}
                  src={`vids/${project.vid}`}
                  type='video/mp4'
                  muted
                  className='vid'
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
    } else {
      return (
        <div
          ref={ref}
          className={projectState ? 'project-mobile' : 'project-mobile project--hidden'}
        >
          <div className='project-heading'>
            <h5>{project.header[0]}</h5>
            <h4>{project.header[1]}</h4>
          </div>

          <div
            className='project-content'
            dangerouslySetInnerHTML={{ __html: project.content }}
          ></div>
          <div className='project-tags'>
            <ul>{tags(project.technologies)}</ul>
          </div>
          <div className='mobile-icons'>
            <a href={project.gitURL} rel='noreferrer' target='_blank'>
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>
            {link(project)}
          </div>
        </div>
      );
    }
  };

  return <React.Fragment>{renderProject()}</React.Fragment>;
};

export default ProjectRight;
