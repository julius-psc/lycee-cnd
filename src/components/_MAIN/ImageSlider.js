import React, { useState, useEffect } from 'react';
import '../../styles/_MAIN/Slider.css';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <section className='image-section'>
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="slider"
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageSlider;
