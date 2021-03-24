import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const NewPlan = React.lazy(() =>
  import(/* webpackChunkName: "newplan" */ './newplan')
);

const UploadPlan = React.lazy(() =>
  import(/* webpackChunkName: "upload" */ './upload')
);
const BusinessPlanMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/newplan`} />
      <Route
        path={`${match.url}/newplan`}
        render={(props) => <NewPlan {...props} />}
      />
      <Redirect exact from={`${match.url}/`} to={`${match.url}/upload`} />
      <Route
        path={`${match.url}/upload`}
        render={(props) => <UploadPlan {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default BusinessPlanMenu;
