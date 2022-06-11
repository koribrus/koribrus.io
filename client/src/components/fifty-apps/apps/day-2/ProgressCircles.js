import React from 'react';
import ProgressLine from './ProgressLine';

const ProgressCircles = (props) => {
  const renderCircles = () => {
    const circles = [1, 2, 3, 4];

    const circleDivs = circles.map((circle) => {
      const activeClass = props.progress + 1 >= circle ? 'active-pro' : '';

      return (
        <div key={circle} className={`step-pro ${activeClass}`}>
          {circle}
        </div>
      );
    });

    return circleDivs;
  };

  return (
    <div className='progress-container'>
      <ProgressLine progress={props.progress} />
      {renderCircles()}
    </div>
  );
};

export default ProgressCircles;
