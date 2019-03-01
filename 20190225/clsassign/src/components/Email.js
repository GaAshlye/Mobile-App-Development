import React, {Component} from 'react';

class Email extends Component {

    constructor(props){
        super(props);


        this.state ={
            email: ''
        }
        
        this.onEmailChange = this.onEmailChange.bind(this);
    }
   
    onEmailChange(event) {
        const email = event.target.value;

        //lift the state value to parent (form)
        this.props.onEmailInputChange(email); //need to call onEmailInputChange in parent


        this.setState( () =>{
            return {
                email
            }
        });


    };
    
    render() { 
        return ( 
            <div className="form-group">
             <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                                                                                    value={this.state.email} onChange={this.onEmailChange}></input>
                
            </div>
          );
    }
}
 
export default Email;

