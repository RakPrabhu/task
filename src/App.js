import React from "react";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothingCards from "./components/ClothingCards/ClothingCards";
import Footer from "./components/Footer/Footer";
import image1 from './assets/images/image1.jpg';
import image3 from './assets/images/image3.jpg';


const images = [
  { src: image1, alt: 'First Slide' },
  { src: image3, alt: 'Second Slide' }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-container">
        <p>
         Fueling fashion aspirations,our platform embodies style evolution,offering a curated collection that defines 👀 contemporary elegance
        </p>
        <button className="view-collection-button">View Collection</button>
      </div>
      <ClothingCards/>
      <Footer />
    </div>
  );
}

export default App;
