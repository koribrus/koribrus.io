import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Resume from './resume/Resume';
import projects50 from './projects50/Projects50';
import Library from './library/Library';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/resume' component={Resume} />
            <Route path='/react-projects' component={projects50} />
            <Route path='/library' component={Library} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
