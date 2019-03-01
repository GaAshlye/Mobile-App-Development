import React, {Component} from "react";

class Password extends Component {

constructor(props){
    super(props);

    this.state={
        password: ''
    }

    this.onPWChange = this.onPWChange.bind(this);
    
}
onPWChange(event){
    const password = event.target.value;

        //lift the state value to parent (form)
        this.props.onPwInputChange(password); //need to call onPWInputChange in parent


        this.setState( () =>{
            return {
                password
            }
        });
}

render() { 
        return ( 
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={this.onPWChange} value = {this.state.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
         );
    }
}
 
export default Password;