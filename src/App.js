import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import NotFound from './containers/notFound';
import Home from './containers/unauthenticated/home';
import Login from './containers/unauthenticated/login';
import Registration from './containers/unauthenticated/registration';
import Registration2 from './containers/unauthenticated/registration2';
import UserDashboard from './containers/authenticated/user/userDashboard';
import UpdatePassword from './containers/authenticated/user/updatePassword';
import GroupDashboard from './containers/authenticated/group/groupDashboard';
import CreateGroup from './containers/authenticated/group/createGroup';

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
    <div className="App">
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
          <Route path="/register2">
            <Registration2 />
          </Route>
          <Route path="/updatePassword">
            <UpdatePassword/>
          </Route>
          <Route path="/createGroup">
            <CreateGroup/>
          </Route>
          <Route path="/groupDashboard">
            <GroupDashboard />
          </Route>
          <Route path="/dashboard" render={authGuard(UserDashboard)}></Route>
          <Route exact path="/">
            {isTestLogin ? <UserDashboard/> : <Home/>}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
