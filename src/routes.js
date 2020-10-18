import React, { lazy, Suspense, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loading from './components/Loading';
import ProtectedRoute from './helpers/ProtectedRoute';
import { UserContext } from './context/UserContext';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const Tecnologias = lazy(() => import('./pages/Tecnologias'));
const Videos = lazy(() => import('./pages/Videos'));
const Login = lazy(() => import('./pages/Login'));
const Cadastro = lazy(() => import('./pages/Cadastro'));

const Routes = () => {
  const { login } = useContext(UserContext);

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/tecnologias" component={Tecnologias} />
        <ProtectedRoute exact path="/videos" component={Videos} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/login" component={Login}>
          {login && <Redirect to='/' />}
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
