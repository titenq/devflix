import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from './components/Loading/index';

const Home = lazy(() => import('./pages/Home'));
const Tecnologias = lazy(() => import('./pages/Tecnologias'));
const Videos = lazy(() => import('./pages/Videos'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tecnologias" component={Tecnologias} />
        <Route exact path="/videos" component={Videos} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
