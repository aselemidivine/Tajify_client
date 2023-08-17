import React, { useState } from 'react';
// import { Carousel } from 'react-slider';

const Register = () => {
   return (
    <div className="login__section">
      <div className="login__container">
          <div className="login auth">
              <h3 className="auth__heading">Login</h3>
              <div className="auth__head">
                  <div className="auth__head--card">
                      <FcGoogle />
                      <p>Connect with Google</p>
                  </div>
                  <div className="auth__head--card">
                      <FaFacebook />
                      <p>Connect with Facebook</p>
                  </div>
              </div>

              <span className='auth__mid'>
                  <p> or </p>
              </span>

              <form className="login__form" autoComplete='off'>
                  <div className="form__item">
                      <input type="text" className="form__input" placeholder='username'/>
                  </div>
                  <div className="form__item">
                      <input type="password" className="form__input" placeholder='password'/>
                  </div>
                  <div className="form__flex">
                      <div className="form__item">
                          <input type="password" className="form__check-box" id='check'/>
                          <label htmlFor="check" className="form__label"></label>
                      </div>
                      <a href="#" className="form__link">forgot password?</a>
                  </div>
                  <div className="form__item">
                      <button className="form__submit">Login</button>
                  </div>
                  <span className="form__extra">New to Tajify? <a href='#'>Create Account</a></span>
              </form>
            </div>
        </div>
    </div>      
);
      

}

export default Register
