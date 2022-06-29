import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { setSkills } from '../../redux/visibility';
import useObserver from '../../hooks/useObserver';
import './Skills.css';

const Skills = () => {
  // * redux & ref
  const { skillsVisible } = useSelector((state) => state.visibility);
  const skillsRef = useRef();

  // * custom hook
  useObserver(skillsRef, setSkills);

  return (
    <div ref={skillsRef} className={skillsVisible ? 'skills' : 'skills skills--hidden'}>
      <div className='skills-header'>
        <h5>skills</h5>
        <div className='skills-line'></div>
      </div>
      <div className='skill-bars'>
        <div className='skill-bar'>
          <h6>html/css</h6>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h6>javascript</h6>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h6>react</h6>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h6>redux</h6>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h6>node.js</h6>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '25%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h6>lightroom</h6>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h6>photoshop</h6>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
