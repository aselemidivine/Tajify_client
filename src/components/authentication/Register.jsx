import React, { useState } from 'react';

import '../../index.css';
import './auth.css';

import { FcGoogle } from 'react-icons/fc';


// import { Carousel } from 'react-slider';


/*
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
          </Carousel> */
      
          /* Render your fixed register form here */
          /* <div className="register-form">
            
          </div>
          </div>
*/

const Register = () => {
  return (
    <div className="signup__section">
      <div className="signup__container">
          <div className="signup auth">
              <h3 className="auth__heading">Signup</h3>
              <div className="auth__head">
                <div className="auth__head--card">
                    <FcGoogle />
                    <p>Connect with Google</p>
                </div>
              </div>

              <span className='auth__mid'>
                  <p> or register with email </p>
              </span>

              <form className="login__form" autoComplete='off'>
                <div className="form__item">
                    <input type="text" className="form__input" placeholder='username'/>
                </div>
                <div className="form__item">
                    <input type="tel" className="form__input" placeholder='phone'/>
                </div>
                <div className="form__item">
                    <input type="password" className="form__input" placeholder='password'/>
                </div>
                <div className="form__item">
                    <input type="password" className="form__check-box" id='check'/>
                    <label htmlFor="check" className="form__label">I agree to the <a className='form__link'>Terms </a> & <a className='form__link'>Privacy policy</a></label>
                </div>
                  
                <div className="form__item">
                    <button className="form__submit">Create Account</button>
                </div>
              </form>
            </div>
        </div>
    </div>      
);
      

}

export default Register
