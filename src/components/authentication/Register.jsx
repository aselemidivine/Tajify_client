// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../Api/axios";
// import { State } from "../../context/AuthProvider";

// import "../../index.css";
// import "./auth.css";

// import { HiOutlineKey } from "react-icons/hi";
// import { BiSolidUser } from "react-icons/bi";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";
// import SignupImg from "../../assets/images/pngs/signup-img.png";
// import { Link } from "react-router-dom";
// import LoaderSpinner from "../LoaderSpinner";

// // import { Carousel } from 'react-slider';

// /*
//  const [currentSlide, setCurrentSlide] = useState(0);

//     const handleSlideChange = (index) => {
//         setCurrentSlide(index);
//      }

//     const backgroundImages = [
//       'image1.jpg',
//       'image2.jpg',
//       'image3.jpg',
//       // Add more image URLs as needed
//     ];

//      return (
//         <div>
//           Register
//           {/* <Carousel
//             value={currentSlide}
//             onChange={handleSlideChange}
//           >
//             {backgroundImages.map((image, index) => (
//               <div key={index}>
//                 <img src={image} alt={`Slide ${index + 1}`} />
//               </div>
//             ))}
//           </Carousel> */

// /* Render your fixed register form here */
// /* <div className="register-form">

//           </div>
//           </div>
// */

// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// // const REGISTER_URL = "/signup";
// const REGISTER_URL = "http://localhost:3005/api/users/signup";

// const Register = () => {
//   const nameRef = useRef();
//   const emailRef = useRef();
//   const errRef = useRef();
//   const { setToken } = State();
//   const navigate = useNavigate();

//   // Current state of the Application
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");

//   const [pwd, setPwd] = useState("");
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState("");
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     nameRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setValidPwd(PWD_REGEX.test(pwd));
//     setValidMatch(pwd === matchPwd);
//   }, [pwd, matchPwd]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [username, email, pwd, matchPwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const v1 = PWD_REGEX.test(pwd);
//     if (!v1) {
//       setErrMsg("Invalid Entry");
//       return;
//     }
//     try {
//       const response = await axios.post(
//         REGISTER_URL,
//         JSON.stringify({
//           username,
//           email,
//           password: pwd,
//           passwordConfirm: matchPwd,
//         }),
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       console.log(JSON.stringify(response?.data));
//       //setSuccess(true);
//       const accessToken = response?.data?.user_token;
//       setToken(accessToken);
//       localStorage.setItem("token", JSON.stringify(accessToken));
//       setUsername("");
//       setEmail("");
//       setPwd("");
//       setMatchPwd("");
//       navigate("/");
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("No Server Response");
//       } else if (err.response?.status === 409) {
//         setErrMsg("Username Taken");
//       } else {
//         setErrMsg("Registration Failed");
//       }
//       setLoading(false);
//       errRef.current.focus();
//     }
//   };

//   return (
//     <section className="signup__section">
//       <div className="signup__container ">
//         <div className="signup">
//           <div>
//             {/* {loading && <LoaderSpinner />} */}
//             <h3 className="auth__heading">Register</h3>
//             <div className="auth__head">
//               <div className="auth__head--card">
//                 <FcGoogle />
//                 <p>Connect with Google</p>
//               </div>
//             </div>

//             <span className="auth__mid">
//               <p> or register with email </p>
//             </span>

//             <form
//               className="login__form"
//               autoComplete="off"
//               onSubmit={handleSubmit}
//             >
//               <div className="form__item">
//                 <BiSolidUser className="input__icon" />
//                 <input
//                   type="text"
//                   className="form__input"
//                   placeholder="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   ref={nameRef}
//                   required
//                 />
//               </div>
//               <div className="form__item">
//                 <AiOutlineMail className="input__icon" />
//                 <input
//                   type="email"
//                   className="form__input"
//                   placeholder="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form__item">
//                 <HiOutlineKey className="input__icon" />
//                 <input
//                   type="password"
//                   className="form__input"
//                   placeholder="Password"
//                   id="password"
//                   onChange={(e) => setPwd(e.target.value)}
//                   value={pwd}
//                   required
//                   aria-invalid={validPwd ? "false" : "true"}
//                   aria-describedby="pwdnote"
//                   onFocus={() => setPwdFocus(true)}
//                   onBlur={() => setPwdFocus(false)}
//                 />
//                 <FaRegEyeSlash className="password__icon" />
//               </div>
//               <div className="form__item">
//                 <HiOutlineKey className="input__icon" />
//                 <input
//                   type="password"
//                   className="form__input"
//                   placeholder="Confirm Password"
//                   onChange={(e) => setMatchPwd(e.target.value)}
//                   value={matchPwd}
//                   required
//                   aria-invalid={validMatch ? "false" : "true"}
//                   aria-describedby="confirmnote"
//                   onFocus={() => setMatchFocus(true)}
//                   onBlur={() => setMatchFocus(false)}
//                 />
//                 <FaRegEyeSlash className="password__icon" />
//               </div>
//               <div className="form__flex">
//                 <input type="checkbox" className="form__check-box" id="check" />
//                 <label htmlFor="checkbox" className="form__label">
//                   I agree to the{" "}
//                   <a href="#" className="form__link">
//                     Terms{" "}
//                   </a>{" "}
//                   &{" "}
//                   <a href="#" className="form__link">
//                     Privacy policy
//                   </a>
//                   .
//                 </label>
//               </div>

//               <div className="form__item">
//                 {/* <Link to="/login"> */}
//                 <button
//                   className="form__submit button"
//                   // disabled={!validPwd || !validMatch}
//                 >
//                   Create Account
//                 </button>
//                 {/* </Link> */}
//               </div>
//             </form>
//           </div>
//           <div className="signup__images--box">
//             <img src={SignupImg} alt="signup image" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;

import React, { useState, useRef, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import { useNavigate } from "react-router-dom";


import "../../index.css";
import "./auth.css";
import { HiOutlineKey } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import SignupImg from "../../assets/images/pngs/signup-img.png";
import { Link } from "react-router-dom";
import LoaderSpinner from "../LoaderSpinner";
import { useAuthContext } from "../../context/AuthContext";

const REGISTER_URL = "http://localhost:3005/api/users/signup"; // Replace with your actual API endpoint

const Register = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg(""); // Reset error message

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, email, password, passwordConfirm }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(JSON.stringify(response.data));
      setLoading(false);
      navigate("/login");

      // Handle success and redirection
    } catch (err) {
      console.error(err);
      setLoading(false);
      setErrMsg("Registration Failed");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);


  return (
    <section className="signup__section">
      <div className="signup__container ">
        <div className="signup">
          <div>
            {/* {loading && <LoaderSpinner />} */}
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

            <form
              className="login__form"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="form__item">
                <BiSolidUser className="input__icon" />
                <input
                  type="text"
                  className="form__input"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form__item">
                <AiOutlineMail className="input__icon" />
                <input
                  type="email"
                  className="form__input"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form__item">
                <HiOutlineKey className="input__icon" />
                <input
                  type="password"
                  className="form__input"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                
                />
                <FaRegEyeSlash className="password__icon" />
              </div>
              <div className="form__item">
                <HiOutlineKey className="input__icon" />
                <input
                  type="password"
                  className="form__input"
                  placeholder="Confirm Password"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                  required
                  // aria-invalid={validMatch ? "false" : "true"}
                  // aria-describedby="confirmnote"
                 
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
                {/* <Link to="/login"> */}
                <button
                  className="form__submit button"
                  // disabled={!validPwd || !validMatch}
                >
                  Create Account
                </button>
                {/* </Link> */}
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
