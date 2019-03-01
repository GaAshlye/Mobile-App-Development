import React, { Component } from 'react';
import MyForm from './components/MyForm.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        formresults: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

handleFormSubmit(results){

  const formresults = results;
  
  this.setState( () => {
          return {
              formresults: ''
          };
      }
  );
}
  
  render() {
    return (
      
      <div className="App">
      <div class="container">
      <MyForm onFormSubmit={this.handleFormSubmit}/>
      <div>
        {this.state.formresults}
      </div>
      </div>
      
      </div>
    );
  }
}

export default App;
