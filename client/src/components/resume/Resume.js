import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { fetchResume } from '../../redux/resume';
import resumeAxios from '../../apis/resume';

import ResumeSidebar from './ResumeSidebar';
import School from './School';
import Job from './Job';
import profileImg from '../../img/kori-brus-profile.jpg';
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

  console.log(resume);
  console.log(resume ? 'resume' : 'no resume');

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
                <img src={profileImg} alt='profile pic' />
              </div>
            </div>
            <div className='profile-summary'>
              <div className='contact-info'>
                <ul>
                  <li>{basics.email}</li>
                  <li>{basics.phone}</li>
                  <li>{basics.location.address}</li>
                  <li>{basics.website}</li>
                </ul>
              </div>
              <ResumeSidebar />
            </div>
          </div>
          <div className='resume-right'>
            <div className='resume-header'>
              <h2>{basics.name}</h2>
              <div className='objective'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
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
                    <div className='project-left'>
                      <h5>koribrus.io</h5>
                      <a href='/' className='project-icon'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </div>
                    <h6>2022</h6>
                  </div>
                  <p>
                    Portfolio site coded from scratch featuring a node.js backend and express.js
                    server, React framework, Redux Toolkit state, React Router, and data fetch from
                    multiple APIs (Google and Github). Design inspiration from Brittnay Chiang.
                  </p>
                </div>
                <div className='web-project'>
                  <div className='project-name'>
                    <div className='project-left'>
                      <h5>my library</h5>
                      <a href='/' className='project-icon'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </div>
                    <h6>2022</h6>
                  </div>
                  <p>
                    Online library and reader featuring my personal reading recommendations. Google
                    Books API with Axios, Redux Toolkit state management, and a React Framework.
                  </p>
                </div>
                <div className='web-project'>
                  <div className='project-name'>
                    <div className='project-left'>
                      <h5>koribrus.photography</h5>
                      <a href='/' className='project-icon'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </div>
                    <h6>2021</h6>
                  </div>
                  <p>
                    Personal photography site featuring parallax scrolling, lightbox image showcase,
                    page animations, and responsive design with layouts for PC, tablets and mobile
                    devices. Written exclusively in HTML/CSS/JavaScript.
                  </p>
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
