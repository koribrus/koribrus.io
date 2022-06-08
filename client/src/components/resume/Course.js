import React from 'react';

const Course = ({ course }) => {
  return (
    <div className='course'>
      <p>{course.course}</p>
      <h6>{course.year}</h6>
    </div>
  );
};

export default Course;
