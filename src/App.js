import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Loginpage from './container/LoginPage';
import Dashboard from './container/Dashboard';
import ProtectedRoutes from './protectedRoute';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const auth = useSelector(state => state.isAuthenticated)
  return (
    <div>
      <Router>
        <Switch>
          <ProtectedRoutes auth={auth} exact path="/" component={Dashboard} />
          <Route exact path='/loginpage' component={Loginpage} />
        </Switch>
      </Router>
      {/* <Loginpage /> */}
    </div>
  );
}

export default App;

