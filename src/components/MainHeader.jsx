// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";



// const lists = ['Blogs', 'Gigs', 'Course', 'Market', 'Explore'];


// function MainHeader() {

//   const { user } = useAuthContext();



//     return (
//         <header className='header'>
//             <span className="header__logo header__logo-2">Tajify</span>
//             <nav className="navbar">
//               <ui className="navbar__list">
//                 {lists.map(list => {
//                   return (
//                   <li className="navbar__list--item" key={list}>
//                     <Link to = "" className="navbar__list--link">{list}</Link>
//                     {/* <Link to = "/writer" className="navbar__list--link">{list}</Link> */}
//                   </li>
//                   );
//                 })}
//               </ui>
//               <a href="/signup" className="nav__button">Get Started</a>
//             </nav>
//         </header>
//     );
// };

// export default MainHeader;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import "../pages/blogHome/main.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FiBell } from "react-icons/fi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useAuthContext } from "../context/AuthContext";

const lists = ["Blogs", "Gigs", "Course", "Market", "Explore"];

function SubHeader() {
  const { user } = useAuthContext();
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <header className='header'>
    <span className="header__logo header__logo-2">Tajify</span>
      <nav className="navbar">
        <ui className="navbar__list">
          <li className="navbar__list--item">
            <Link to="/writer" className="navbar__list--link">
              Blogs
            </Link>
          </li>
          <li className="navbar__list--item">
            <Link to="/coming-soon" className="navbar__list--link">
              Gigs
            </Link>
          </li>
          <li className="navbar__list--item">
            <Link to="/coming-soon" className="navbar__list--link">
              Course
            </Link>
          </li>
          <li className="navbar__list--item">
            <Link to="/coming-soon" className="navbar__list--link">
              Market
            </Link>
          </li>
          <li className="navbar__list--item">
            <Link to="/coming-soon" className="navbar__list--link">
              Explore
            </Link>
          </li>
        </ui>

        {/* {isRegistered ? (
            <>
              <Link to="/editor">
                <HiOutlinePencilSquare className="navbar__icons" />
              </Link>
              <FiBell className="navbar__icons" />
              <Profile />
            </>
          ) : (
            <button className="get-started-button">Get Started</button>
          )} */}

        <span className="Navbar__others">
          {/* {isRegistered ? ( */}
          {user && (
            <>
              <Link to="/editor">
                <HiOutlinePencilSquare className="navbar__icons" />
              </Link>
              <FiBell className="navbar__icons" />
              <div className="profile__bane--container">

              <Profile />
              </div>
            </>
          )}
          {!user && (
            <Link to="/signup" className="nav__button">
              Get Started
            </Link>
          )}
        </span>
      </nav>
    </header>
  );
}

function Profile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header__profile--box">
      <Link to="/profile">
        <div className="profile__image--box" onClick={toggleDropdown}>
          <img
            src={profilePhoto}
            alt="profile image"
            className="profile__image"
          />
        </div>
      </Link>
      <p className="profile__name">Aselemi Divine</p>
      <LiaAngleDownSolid className="navbar__icons" />
      {isDropdownOpen && (
        <div className="profile__dropdown-menu">
          <Link to="/profile" className="dropdown-menu__link">
            Profile
          </Link>
          <Link to="/settings" className="dropdown-menu__link">
            Settings
          </Link>
          <button className="dropdown-menu__link">Logout</button>
        </div>
      )}
    </div>
  );
}

export default SubHeader;

