import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { fetchResume } from '../../redux/resume';
import resumeAxios from '../../apis/resume';
import ResumeSidebar from './ResumeSidebar';
import School from './School';
import Job from './Job';
import './Resume.css';

const Resume = () => {
  const [resume, setResume] = useState(null);
  // const { resume } = useSelector((state) => state.resume);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchResume());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    const fetchResumes = async () => {
      const response = await resumeAxios.get('resume');
      const data = response.data.data;

      setResume(data.resume);
    };

    fetchResumes();
  }, []);

  const renderSchools = (schools) => {
    const renderedSchools = schools.map((school, index) => {
      return <School school={school} key={index} />;
    });

    return renderedSchools;
  };

  const renderJobs = (jobs) => {
    const renderedJobs = jobs.map((job, index) => {
      return <Job job={job} key={index} />;
    });
    return renderedJobs;
  };

  const renderResume = (resume) => {
    if (!resume) {
      return <div>loading...</div>;
    } else {
      const { basics, education, work } = resume;

      return (
        <div className='resume'>
          <div className='resume-left'>
            <div className='resume-img-container'>
              <div className='resume-img'>
                <img src='/img/kori-brus-profile.jpg' alt='profile pic' />
              </div>
            </div>
            <div className='profile-summary'>
              <div className='contact-info'>
                <ul>
                  <li>{basics.email}</li>
                  <li>{basics.phone}</li>
                  <li>{basics.location.address}</li>
                  <li>
                    <Link to='/' className='contact-link'>
                      {basics.website}
                    </Link>
                  </li>
                </ul>
              </div>
              <a href={'/files/koribrus-resume.pdf'} className='resume-btn'>
                Download PDF
              </a>
              <ResumeSidebar />
            </div>
          </div>
          <div className='resume-right'>
            <div className='resume-header'>
              <h2>{basics.name}</h2>
              <div className='objective'>
                A communications professional launching a career in full stack web development.
                Proficiency in JavaScript, CSS/HTML and specializing in the React/Redux environment.
                A natural problem solver and committed learner, I am excited to expand my experience
                into new applications and challenges.
              </div>
            </div>
            <div className='resume-content'>
              <section className='projects'>
                <div className='section-header'>
                  <h4>projects</h4>
                  <div className='line'></div>
                </div>
                <div className='web-project'>
                  <div className='project-name'>
                    <div className='project-title'>
                      <h5>koribrus.io</h5>
                      <Link to='/' className='project-icon'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </Link>
                    </div>
                    <h6>2022</h6>
                  </div>
                  <p>
                    Portfolio site coded from scratch with a node.js/express.js backend, React
                    frontend, Redux Toolkit state, React Router and API calls to server.
                  </p>
                  <ul className='project-list'>
                    <li>Intersection Observer for scroll reveal (no libraries)</li>
                    <li>Smooth scrolling with custom hooks and CSS keyframes (no libraries)</li>
                    <li>Static assets from node.js server</li>
                  </ul>
                </div>
                <div className='web-project'>
                  <div className='project-name'>
                    <div className='project-title'>
                      <h5>the library</h5>
                      <Link to='/library' className='project-icon'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </Link>
                    </div>
                    <h6>2022</h6>
                  </div>
                  <p>
                    Online library and reader showcasing my personal reading lists. Google Books API
                    with Axios API calls, Redux Toolkit state management and React Framework.
                  </p>
                  <ul className='project-list'>
                    <li>React image carousel image slider (no libraries)</li>
                    <li>Async data calls with Redux Toolkit</li>
                    <li>Integrated book reader & modal window with React Portals</li>
                  </ul>
                </div>
                <div className='web-project'>
                  <div className='project-name'>
                    <div className='project-title'>
                      <h5>koribrus.photography</h5>
                      <a href='https://koribrus.photography/' className='project-icon'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </div>
                    <h6>2021</h6>
                  </div>
                  <p>
                    Personal photography site featuring parallax scrolling, lightbox image showcase,
                    page animations, and responsive layout. Written exclusively in
                    HTML/CSS/JavaScript.
                  </p>
                  <ul className='project-list'>
                    <li>Parallax scrolling with responsive background image</li>
                    <li>Custom layouts for mobile, landscape and web</li>
                    <li>PHP contact form</li>
                  </ul>
                </div>
              </section>

              <section className='education'>
                <div className='section-header'>
                  <h4>education</h4>
                  <div className='line'></div>
                </div>
                {renderSchools(education)}
              </section>

              <section className='work'>
                <div className='section-header'>
                  <h4>work</h4>
                  <div className='line'></div>
                </div>
                {renderJobs(work)}
              </section>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{renderResume(resume)}</>;
};

export default Resume;
