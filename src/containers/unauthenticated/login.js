import React from 'react';
import Button from 'react-bootstrap/Button';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "text"
    }
  }


  render(){
    return (
      <div className="container">
        <h1>Login</h1>
        <Button>Login</Button>
        <Button>Sign up</Button>
      </div>
    );
  }
}

export default Login;
