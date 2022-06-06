import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Resume from './resume/Resume';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/resume' component={Resume} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
