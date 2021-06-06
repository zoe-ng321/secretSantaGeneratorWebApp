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
import About from './containers/unauthenticated/about';
import Registration from './containers/unauthenticated/registration';
import Registration2 from './containers/unauthenticated/registration2';
import UserDashboard from './containers/authenticated/user/userDashboard';
import UpdatePassword from './containers/authenticated/user/updatePassword';
import UpdateProfile from './containers/authenticated/user/updateProfile';
import Profile from './containers/authenticated/user/profile';
import GroupDashboard from './containers/authenticated/group/groupDashboard';
import CreateGroup from './containers/authenticated/group/createGroup';
import JoinGroup from './containers/authenticated/group/joinGroup';
import AddExclusion from './containers/authenticated/group/addExclusion';
import Wishlist from './containers/authenticated/wishlist/wishlist';

function App() {

  const authGuard = (Component) => () => {
    //return <Component/>;
    return localStorage.getItem("auth-token") ? (
      <Component />
    ) : (
      <Redirect to="/login" />
    );
  };

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={localStorage.getItem("auth-token")}/>
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/updatePassword" render={authGuard(UpdatePassword)}></Route>
          <Route path="/updateProfile" render={authGuard(UpdateProfile)}></Route>
          <Route path="/profile" render={authGuard(Profile)}></Route>
          <Route path="/joinGroup" render={authGuard(JoinGroup)}></Route>
          <Route path="/createGroup" render={authGuard(CreateGroup)}></Route>
          <Route path="/addExclusion" render={authGuard(AddExclusion)}></Route>
          <Route path="/groupDashboard/:groupId" render={authGuard(GroupDashboard)}></Route>
          <Route path="/wishlist" render={authGuard(Wishlist)}></Route>
          <Route path="/dashboard" render={authGuard(UserDashboard)}></Route>
          <Route exact path="/">
            {localStorage.getItem("auth-token") ? <UserDashboard/> : <Home/>}
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
