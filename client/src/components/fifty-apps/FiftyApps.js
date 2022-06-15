import React from 'react';
import { Route } from 'react-router-dom';

import HeaderSlim from './HeaderSlim';
import Default from './Default';
import ExpandingCards from './apps/day-1/ExpandingCards';
import ProgressSteps from './apps/day-2/ProgressSteps';

const FiftyApps = () => {
  return (
    <div>
      <HeaderSlim />
      <Route path='/fifty-apps/' exact component={Default} />
      <Route path='/fifty-apps/1' component={ExpandingCards} />
      <Route path='/fifty-apps/2' component={ProgressSteps} />
    </div>
  );
};

export default FiftyApps;
