import React from 'react';

import '../../index.css';
import './auth.css';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import Image1 from '../../assets/images/pngs/login-slide-img-1.png';
import Image2 from '../../assets/images/pngs/login-slide-img-2.png';
import Image3 from '../../assets/images/pngs/login-slide-img-3.png';
const images = [Image1, Image2, Image3];

const Login = () => {
  return (
    <div className="login__section">
        <div className="login__container login">
            <div className="auth">
                <h3 className="auth__heading">Log in</h3>
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
                            <input type="checkbox" className="form__checkbox" id='checkbox'/>
                            <label htmlFor="checkbox" className="form__label">Remember me</label>
                        </div>
                        <a href="#" className="form__link">forgot password?</a>
                    </div>
                    <div className="form__item">
                        <button className="form__submit">Login</button>
                    </div>
                    <span className="form__extra">New to Tajify? <a href='#'>Create Account</a></span>
                </form>
            </div>
            <div className="login__slide">
                <img src={Image1} alt="login slides" />
            </div>
        </div>
    </div>
  )
}

export default Login
