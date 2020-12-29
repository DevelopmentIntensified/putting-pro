import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ROUTES from '../../static/routes';
import HomePage from '../Home';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={ROUTES.HOME} component={HomePage} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;