import React from "react";
import Email from "./email";
import ZipCode from "./zipCode";
import Submit from "./submit";
class simpleForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
            <div class="form-group">
            <Email />
            <ZipCode />
            <Submit />
            </div>
            </form>
         );
    }
}
 
export default simpleForm;