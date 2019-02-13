import React, { Component } from 'react';
import './App.css';
import SignInForm from './components/signInForm';
import Header from './components/header';
import Footer from './components/footer';
import Welcome from './components/welcome';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <SignInForm />
        <Footer />
      </div>
    );
  }
}

export default App;
