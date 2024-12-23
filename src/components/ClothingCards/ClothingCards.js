import React, { useState } from "react";
import "./ClothingCards.css";
import img1 from "../../assets/images/clothes/formal_man.jpg";
import img2 from "../../assets/images/clothes/formal_women.jpg";
import img3 from "../../assets/images/clothes/jacket.jpg";
import img4 from "../../assets/images/clothes/women_casual.jpg";

const clothes = [
  { id: 1, src: img1, title: "Formal Wear", price: "$50" },
  { id: 2, src: img2, title: "Formal Wear", price: "$70" },
  { id: 3, src: img3, title: "Jacket", price: "$25" },
  { id: 4, src: img4, title: "Floral Dress", price: "$80" },
];

const ClothingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clothes.length); // Loop through images
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clothes.length) % clothes.length
    ); // Loop back to the last image
  };

  return (
    <div id="clothing-cards" className="clothing-cards-container">
      {/* Title Section */}
      <div className="clothing-cards-title">
        <h2>New Arrivals</h2>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        {/* Image Section */}
        <div className="carousel-image-container">
          <img
            src={clothes[currentIndex].src}
            alt={clothes[currentIndex].title}
            className="carousel-image"
          />
        </div>

        {/* Navigation Buttons */}
        <button className="prev-button" onClick={prevImage}>
          &lt;
        </button>
        <button className="next-button" onClick={nextImage}>
          &gt;
        </button>
      </div>

      {/* Clothing Info */}
      <div className="card-content">
        <h3>{clothes[currentIndex].title}</h3>
        <p>{clothes[currentIndex].price}</p>
      </div>
    </div>
  );
};

export default ClothingCards;
