import React, { useState } from 'react';
// import { Carousel } from 'react-slider';

const Register = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
     }

     const backgroundImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image URLs as needed
      ];
      

     return (
        <div>
          Register
          {/* <Carousel
            value={currentSlide}
            onChange={handleSlideChange}
          >
            {backgroundImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel> */}
      
          {/* Render your fixed register form here */}
          {/* <div className="register-form">
            
          </div> */}
        </div>
      );
      

}

export default Register
