import React, { Component } from "react";

class emailInput extends Component {
    state = {  }
    render() { 
        return (  
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
        );
    }
}
 
export default emailInput;