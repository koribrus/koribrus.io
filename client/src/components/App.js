import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Resume from './resume/Resume';
import FiftyApps from './fifty-apps/FiftyApps';
import Library from './library/Library';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/resume' component={Resume} />
            <Route path='/library' component={Library} />
            <Route path='/fifty-apps' component={FiftyApps} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
