import React from "react";

import "../../index.css";
import "./auth.css";

import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { HiOutlineKey } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";

import Image1 from "../../assets/images/pngs/login-slide-img-1.png";
import Image2 from "../../assets/images/pngs/login-slide-img-2.png";
import Image3 from "../../assets/images/pngs/login-slide-img-3.png";
import { Link } from "react-router-dom";
const images = [Image1, Image2, Image3];

const Login = () => {
  return (
    <section className="login__section">
      <div className="login__container login">
        <div className="auth">
          <h3 className="auth__heading">Log in</h3>
          <div className="auth__head">
            <div className="auth__head--card">
              <FcGoogle />
              <p>Connect with Google</p>
            </div>
            <div className="auth__head--card">
              <SiFacebook style={{ color: "#4267B2" }} />
              <p>Connect with Facebook</p>
            </div>
          </div>

          <span className="auth__mid login__mid">
            <p> or </p>
          </span>

          <form className="login__form" autoComplete="off">
            <div className="form__item">
              <BiSolidUser className="input__icon" />
              <input
                type="text"
                className="form__input"
                placeholder="Username"
              />
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
              <input type="checkbox" className="form__checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="form__label">
                Remember me
              </label>
              <a href="#" className="form__link">
                forgot password?
              </a>
            </div>
            <div className="form__item">
              <Link to="/writer">
                <button className="form__submit">Login</button>
              </Link>
            </div>
            <span className="form__extra">
              New to Tajify? <a href="#">Create Account</a>
            </span>
          </form>
        </div>
        <div className="login__slide">
          <img src={Image1} alt="login slides" className=" login__image" />
        </div>
      </div>
    </section>
  );
};

export default Login;
