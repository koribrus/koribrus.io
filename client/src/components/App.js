import React from 'react';
import { Route, Redirect, useLocation, Switch } from 'react-router-dom';
import Home from './home/Home';
import Resume from './resume/Resume';
import FiftyApps from './fifty-apps/FiftyApps';
import Library from './library/Library';

const App = () => {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <React.Fragment>
        <Switch>
          <Redirect from='/:url*(/+)' to={pathname.slice(0, -1)} />
          <Route path='/' exact component={Home} />
          <Route path='/resume' component={Resume} />
          <Route path='/library' component={Library} />
          <Route path='/fifty-apps' component={FiftyApps} />
        </Switch>
      </React.Fragment>
    </React.Fragment>
  );
};

export default App;
