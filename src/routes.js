import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import Main from './pages/Main';

const Routes = () => {
  <Router>
    <Switch>
      <Route path="/" Component={Main} />
    </Switch>
  </Router>;
};

export default Routes;
