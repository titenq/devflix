import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Tecnologias = lazy(() => import('./pages/Tecnologias'));
const Videos = lazy(() => import('./pages/Videos'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const Routes = () => {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
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
