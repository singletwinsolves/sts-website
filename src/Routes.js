import React from 'react';
import { Route, IndexRoute } from 'react-router';

// You can choose your kind of history here (e.g. browserHistory)
import { Router, hashHistory as history } from 'react-router';
// Your routes.js file
import routes from './routes';

/**
 * Import all page components here
 */
import About from './About'; 
import Privacy from './Privacy';
import QuickFix from './Quickfix';
import Solutions from './Solutions';

ReactDOM.render(
  <Router routes={routes} history={history} />,
  document.getElementById('your-app')
);
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/about" component={About} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/quickfix" component={QuickFix} />
    <Route path="/solutions" component={Solutions} />
  </Route>
);
