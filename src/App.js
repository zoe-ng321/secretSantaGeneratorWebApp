import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import NotFound from './containers/notFound';
import Home from './containers/unauthenticated/home';
import Login from './containers/unauthenticated/login';
import Registration from './containers/unauthenticated/registration';
import UserDashboard from './containers/authenticated/userDashboard';

function App() {

  const authGuard = (Component) => () => {
    return <Component/>;
    /*return localStorage.getItem("auth-token") ? (
      <Component />
    ) : (
      <Redirect to="/login" />
    );*/
  };
//{localStorage.getItem("auth-token") ? <UserDashboard/> : <Home/>}
  const isTestLogin = false;

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/dashboard" render={authGuard(UserDashboard)}></Route>
          <Route exact path="/">
            {isTestLogin ? <UserDashboard/> : <Home/>}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
