import { Redirect, Route, Switch } from 'react-router-dom';

/* Import Components */
import { NavBar, ProtectedRoute } from 'components';

/* Import Route Components */
import { Home } from './home';
import { Profile } from './profile';
import { AuthRoutes } from './auth';
import ProjectsPage from 'routes/projects';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route>
        <div>
          <NavBar />
          <hr />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <ProtectedRoute exact path="/profile" component={Profile} />
              <ProtectedRoute exact path="/projects" component={ProjectsPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Route>
    </Switch>
  );
};
