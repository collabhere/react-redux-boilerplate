import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./containers/Home'));

const Routes = () => {
    return (
        <Suspense fallback={<div> Lazy Loading components </div>}>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </Suspense>
    );
};

export default Routes;