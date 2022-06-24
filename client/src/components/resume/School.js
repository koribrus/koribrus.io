import React from 'react';
import Course from './Course';

const School = ({ school }) => {
  const renderCourses = (courses) => {
    const renderedCourses = courses.map((course, index) => {
      return <Course course={course} key={index} />;
    });

    return renderedCourses;
  };

  return (
    <div className='school'>
      <h5>{school.institution}</h5>
      {renderCourses(school.courses)}
    </div>
  );
};

export default School;
