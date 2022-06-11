import React from 'react';

const ProgressLine = (props) => {
  return <div className='line-pro' style={{ width: `${(props.progress * 100) / 3}%` }}></div>;
};

export default ProgressLine;
