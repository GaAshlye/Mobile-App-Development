//import React from "react";
let root = document.getElementById("root");


const App = () => {
    return React.createElement('div', { className: "text-center bg-primary text-white p-4 border rounded border-dark", style: { margin: 'auto', marginTop: 50, width: 300, height: 200 } },
      React.createElement(Form, {}
      )
    )
  };

const Form = () => {
    return React.createElement('form', {}, [
      React.createElement(Email, { key: 1 }),
      React.createElement(ZipCode, { key: 2 }),
      React.createElement(Submit, { key: 3 })
    ])
  };
const Email = () => {
    return React.createElement(
        'input', { className: "form-control text-center", placeholder: 'Email', type:'email'}
    );
    

}
const ZipCode = () => {
    return React.createElement(
        'input', {className: "form-control text-center", placeholder:'Zip', type:'number', label: 'Zip Code', style:{marginTop: '15px'}}
    );
  

}
const Submit = () => {
    return React.createElement(
        'button', {className: "btn bg-secondary text-white text-center", type:'submit',style:{marginTop: '20px', marginLeft: '175px'}}, "Submit"
    );  

}
ReactDOM.render(React.createElement(App), root); 
