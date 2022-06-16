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
          <h4>html/css</h4>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h4>javascript</h4>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h4>react</h4>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h4>redux</h4>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h4>node.js</h4>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '25%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h4>lightroom</h4>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className='skill-bar'>
          <h4>photoshop</h4>
          <div className='progress'>
            <div className='progress-percent' style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
