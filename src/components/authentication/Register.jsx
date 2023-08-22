import React, { useState } from "react";

import "../../index.css";
import "./auth.css";

import { HiOutlineKey } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import SignupImg from "../../assets/images/pngs/signup-img.png";
import { Link } from "react-router-dom";

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
    <section className="signup__section">
      <div className="signup__container ">
        <div className="signup">
          <div>
            <h3 className="auth__heading">Register</h3>
            <div className="auth__head">
              <div className="auth__head--card">
                <FcGoogle />
                <p>Connect with Google</p>
              </div>
            </div>

            <span className="auth__mid">
              <p> or register with email </p>
            </span>

            <form className="login__form" autoComplete="off">
              <div className="form__item">
                <BiSolidUser className="input__icon" />
                <input
                  type="text"
                  className="form__input"
                  placeholder="username"
                />
              </div>
              <div className="form__item">
                <HiOutlinePhone className="input__icon" />
                <input type="tel" className="form__input" placeholder="phone" />
              </div>
              <div className="form__item">
                <HiOutlineKey className="input__icon" />
                <input
                  type="password"
                  className="form__input"
                  placeholder="Password"
                />
                <FaRegEyeSlash className="password__icon" />
              </div>
              <div className="form__flex">
                <input type="checkbox" className="form__check-box" id="check" />
                <label htmlFor="checkbox" className="form__label">
                  I agree to the{" "}
                  <a href="#" className="form__link">
                    Terms{" "}
                  </a>{" "}
                  &{" "}
                  <a href="#" className="form__link">
                    Privacy policy
                  </a>
                  .
                </label>
              </div>

              <div className="form__item">
                <Link to="/login">
                  <button className="form__submit">Create Account</button>
                </Link>
              </div>
            </form>
          </div>
          <div className="signup__images--box">
            <img src={SignupImg} alt="signup image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
