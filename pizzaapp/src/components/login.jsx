import React, { Component } from "react";
import LoginForm from "./loginForm";

class login extends Component {
  state = {};
  render() {
    return (

    <div className="container background py-5 background">
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>     
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label> 
      <input class="form-control"
           id="pwd"
           type="password"></input>
    
    <button className="btn btn-primary"
          type="submit">Login</button>
       </div>
   
    

    
    );
  }
}

export default Login;