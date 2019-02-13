import React, { Component } from "react";
import Cheese from "../images/pizza1.jpg";
import Pepperoni from "../images/pizza2.jpg";
import Supreme from "../images/pizza3.jpg";

const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return (
        <div classNameName="image-slide" style={styles}></div>
      );
    }

class welcome extends Component {
    state = {  }
    render() { 
        return ( 

            <header>
    <div className="carousel slide"
         data-ride="carousel"
         id="carouselExampleIndicators">
      <ol className="carousel-indicators"></ol>
      <div className="carousel-inner"
           role="listbox">        
        <div className="carousel-item active">
        {/* <img src={Dominos} alt="dominos" className="rounded p-1" /> */}
             <img src={ Cheese } />
          <div className="carousel-caption d-none d-md-block">
            <h1 style="color:white"><b>Cheap Delicious Pizza!</b></h1>
            <h3 style="color:white"><b>Find the best pizza at the lowest cost!</b></h3>
          </div>
        </div>
        <div className="carousel-item"
             style="background-image: url('images/pizza2.jpg')">
          <div className="carousel-caption d-none d-md-block">
            <h1 style="color:white"><b>Cheap Delicious Pizza!</b></h1>
            <p style="color:white"><b>Find the best pizza at the lowest cost!</b></p>
          </div>
        </div>
        <div className="carousel-item"
             style="background-image: url('images/pizza3.jpg')">
          <div className="carousel-caption d-none d-md-block">
            <h1 style="color:white"><b>Cheap Delicious Pizza!</b></h1>
            <p style="color:white"><b>Find the best pizza at the lowest cost!</b></p>
          </div>
        </div>
      </div><a className="carousel-control-prev"
           data-slide="prev"
           href="#carouselExampleIndicators"
           role="button"> <span className="sr-only">Previous</span></a> <a className="carousel-control-next"
           data-slide="next"
           href="#carouselExampleIndicators"
           role="button"> <span className="sr-only">Next</span></a>
    </div>
  </header>
    
         );
    }
}
 
export default welcome;