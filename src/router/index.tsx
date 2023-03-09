import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
