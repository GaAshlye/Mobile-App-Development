import React, {Component} from "react";

class Button extends Component {
    constructor(props){
        super(props);

        this.state = {
            submit: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        const results = "success";
        this.setState( () => {
            return {
                results
            };
        })

    };


    render() { 
        return ( 
            <button type="submit" 
                            className="btn btn-primary">Submit</button>
         );
    }
}
 
export default Button;