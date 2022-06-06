import React from 'react';
import ResumeSidebar from './ResumeSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './Resume.css';
import profileImg from '../../img/kori-brus-profile.jpg';

const Resume = () => {
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
              <li>koribrus@pm.me</li>
              <li>250 507 6892</li>
              <li>victoria, bc</li>
              <li>koribrus.io</li>
            </ul>
          </div>
          <ResumeSidebar />
        </div>
      </div>
      <div className='resume-right'>
        <div className='resume-header'>
          <h2>kori brus</h2>
          <div className='objective'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia.
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
                  <a>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
                <h6>2022</h6>
              </div>
              <p>
                Portfolio site coded from scratch featuring a node.js backend and express.js server,
                React framework, Redux Toolkit state, React Router, and data fetch from multiple
                APIs (Google and Github). Design inspiration from Brittnay Chiang.
              </p>
            </div>
            <div className='web-project'>
              <div className='project-name'>
                <div className='project-left'>
                  <h5>my library</h5>
                  <a>
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
                  <a>
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

            <div className='school'>
              <h5>udemy</h5>
              <div className='course'>
                <p>Node.js, Express, MongoDB & More: The Complete Bootcamp 2022 (ongoing)</p>
                <h6>2022</h6>
              </div>
              <div className='course'>
                <p>Modern React with Redux</p>
                <h6>2022</h6>
              </div>
              <div className='course'>
                <p>JavaScript: Understanding the Weird Parts</p>
                <h6>2021</h6>
              </div>
              <div className='course'>
                <p>Modern JavaScript from the Beginning</p>
                <h6>2021</h6>
              </div>
              <div className='course'>
                <p>The Complete JavaScript Course</p>
                <h6>2021</h6>
              </div>
              <div className='course'>
                <p>Modern HTML & CSS from the Beginning</p>
                <h6>2021</h6>
              </div>
            </div>

            <div className='school'>
              <h5>codecademy</h5>
              <div className='course'>
                <p>Build a Website with HTML, CSS, and Github Pages</p>
                <h6>2021</h6>
              </div>
              <div className='course'>
                <p>Learn Responsive Design, CSS & HTML (3 courses)</p>
                <h6>2021</h6>
              </div>
              <div className='course'>
                <p>Learn the Command Line</p>
                <h6>2020</h6>
              </div>
              <div className='course'>
                <p>Learn Python 3</p>
                <h6>2020</h6>
              </div>
            </div>
          </section>

          <section className='work'>
            <div className='section-header'>
              <h4>work</h4>
              <div className='line'></div>
            </div>
            <div className='job'>
              <h5>Cascadia Liquor</h5>
              <div className='role'>
                <h6>Manager on Duty</h6>
                <h6>2018 — present</h6>
              </div>
              <p>
                Supervising up to 5 staff members. Maintaining inventory and merchandising. Customer
                service and closing duties.
              </p>
            </div>
            <div className='job'>
              <h5>Jeollanamdo Office of Education - Suncheon High School</h5>
              <div className='role'>
                <h6>Native English Teacher</h6>
                <h6>2015 — 2018</h6>
              </div>
              <p>
                Designed and implemented curriculum and lessons for senior high school
                conversational English classes. Evaluated student speaking ability. Conducted
                workshops and professional development seminars for Korean teachers.
              </p>
            </div>
            <div className='job'>
              <h5>Good Works Communications</h5>
              <div className='role'>
                <h6>Philanthropic Counsel & Marketing Specialist</h6>
                <h6>2011 — 2013</h6>
              </div>
              <p>
                Delivered integrated direct response/communications programs for a 5-10 client
                portfolio that included UNHCR, CPAWS, Canadian Museum of Civilization Corporation,
                and Canadian Hunger Foundation. Managed client relationships, messages and branding,
                and program strategy for various campaigns.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
