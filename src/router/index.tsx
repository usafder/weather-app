import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import WeatherReport from '../pages/WeatherReport';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WeatherReport} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
