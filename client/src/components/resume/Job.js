import React from 'react';

const Job = ({ job }) => {
  return (
    <div className='job'>
      <h5>{job.company}</h5>
      <div className='role'>
        <h6>{job.position}</h6>
        <h6>{job.date}</h6>
      </div>
      <p>{job.summary}</p>
    </div>
  );
};

export default Job;
