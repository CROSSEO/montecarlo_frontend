import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Reports = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './reports')
);
const DashboardMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/reports`} />
      <Route
        path={`${match.url}/reports`}
        render={(props) => <Reports {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default DashboardMenu;
