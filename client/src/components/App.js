import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Resume from './resume/Resume';
import Projects50 from './Projects50/Projects50';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/resume' component={Resume} />
            <Route path='/react-projects' component={Projects50} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
