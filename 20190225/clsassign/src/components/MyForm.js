import React, {Component} from "react";
import Email from "./components/Email.js";
import Password from "./components/Password.js";
import Button from "./components/Button.js";

class MyForm extends Component {
    constructor(props){
        super(props);


        this.state = {
            email: '',
            password:''
            
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //handlers for child component

    onEmailChange(email){
        this.setState( () => {
            return {
                email
            };
        });
    }

    onSubmit(event){
        event.preventDefault();

        const results = "Success";
        this.setState( () => {
            return {
                results
            };
        })
    }
    onPWChange(password){         
               
    
            this.setState( () =>{
                return {
                    password
                }
            });
    }


// {/* <Button onFormSubmit={this.onSubmit}/> */}
// <form onSubmit={this.onSubmit}>

    render() { 
        return ( 
            <div>
                <form >
                <Email onEmailInputChange={this.onEmailChange}/>
                <Password onPWInputChange={this.onPWChange}/>             
                
                
                </form>



            </div>
         );
    }
}
 
export default MyForm;
