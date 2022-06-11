import React from 'react';

const Buttons = (props) => {
  const onNextClick = () => {
    props.setParentState({
      progress: props.progress < 3 ? props.progress + 1 : props.progress,
    });
  };

  const onPrevClick = () => {
    props.setParentState({
      progress: props.progress >= 1 ? props.progress - 1 : props.progress,
    });
  };

  const disablePrev = () => {
    return props.progress === 0 ? true : false;
  };

  const disableNext = () => {
    return props.progress === 3 ? true : false;
  };

  return (
    <div className='btn-container'>
      <button onClick={onPrevClick} className='btn-pro' disabled={disablePrev()}>
        Prev
      </button>
      <button onClick={onNextClick} className='btn-pro' disabled={disableNext()}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
