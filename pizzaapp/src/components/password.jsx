import React, { Component } from "react";
class password extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>  
         );
    }
}
 
export default password;