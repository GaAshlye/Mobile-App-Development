import React from "react";
class zipCode extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="form-group">
            <label for="zipCode">Password</label> <input className="form-control"
                 id="zip"
                 placeholder="zip"
                 type="number"> </input>
          </div>
         );
    }
}
 
export default zipCode;