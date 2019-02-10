import React, { Component } from "react";
import LoginForm from "./loginForm";

class login extends Component {
  state = {};
  render() {
    return (

    <div className="container background py-5 background">
          
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>     
    </div>   

    
    );
  }
}

export default Login;