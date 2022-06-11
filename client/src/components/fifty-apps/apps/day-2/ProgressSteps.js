import React from 'react';
import ProgressCircles from './ProgressCircles';
import Buttons from './Buttons';
import './ProgressSteps.css';

class ProgressSteps extends React.Component {
  constructor(props) {
    super(props);

    this.state = { progress: 0 };
  }

  setParentState = (state) => {
    this.setState(state);
  };

  render() {
    return (
      <div className='container-pro'>
        <ProgressCircles progress={this.state.progress} />
        <Buttons progress={this.state.progress} setParentState={this.setParentState} />
      </div>
    );
  }
}

export default ProgressSteps;
