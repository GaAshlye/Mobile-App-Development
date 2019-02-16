import React from "react";

class email extends Component {
    state = {  }
    render() { 
        return (    
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </input>
        </div>
         );
    }
}
 
export default email;