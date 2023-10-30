import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PageLoader from '@/components/PageLoader';

const Login = lazy(() => import(`@/pages/Login.jsx`));

const NotFound = lazy(() => import(`@/pages/NotFound.jsx`));

const Register = lazy(() => import(`@/pages/Register.jsx`));

export default function AuthRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch location={location} key={location.pathname}>
        <PublicRoute path="/" component={Login} render={() => <Redirect to="/login" />} exact />
        <PublicRoute component={Login} path="/login" exact />
        <PublicRoute component={Register} path="/register" exact />
        <Route path="*" component={NotFound} render={() => <Redirect to="/notfound" />} />
      </Switch>
    </Suspense>
  );
}
