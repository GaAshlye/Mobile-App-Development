import React, {Component} from 'react';
import Email from '../components/Email.js';
import Password from '../components/Password.js';
import Button from '../components/Button.js';


class MyForm extends Component {
    constructor(props){
        super(props);


        this.state = {
            email: '',
            password: '',
            results:''
            
            
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPWChange = this.onPWChange.bind(this);
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

    handleFormSubmit(results){

        const formresults = results;
        
        this.setState( () => {
                return {
                    formresults
                };
            }
        );
    }

    onSubmit(event){
        event.preventDefault();

        const results = "Success";
        this.setState( () => {
            return {
                results
            };
            
        })
        this.props.onFormSubmit(results);
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
//<Email onEmailInputChange={this.onEmailChange}/>
// <Password onPWInputChange={this.onPWChange}/>    

    render() { 
        return ( 
            <div className="bg-light">
            
           


                 <section className="py-5 ">
                 <div className="container background">
                <form className="form-group" onSubmit={this.onSubmit}>
                
                 <Email className = "text-center"onEmailInputChange={this.onEmailChange} />  
                 <Password onPwInputChange={this.onPWChange}/>
                 <Button  onFormSubmit={this.onSubmit}/>  
                 
                
                </form>
                </div>
                </section>
                



            </div>
         );
    }
}
 
export default MyForm;
