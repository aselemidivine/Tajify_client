import React, { useState } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import "../pages/blogHome/main.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FiBell } from "react-icons/fi";

function ProfileHeader() {
  return (
    <header className="header header-green">
      <span className="header__logo">Tajify</span>
      <input type='text' className="header__input" />
      <nav className="navbar">
        <ui className="navbar__list">
              <li className="navbar__list--item">
                <Link to="/" className="navbar__list--link">
                  Home
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="/writer" className="navbar__list--link">
                  Blogs
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="/coming-soon" className="navbar__list--link">
                  Channel
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="/coming-soon" className="navbar__list--link">
                  Course
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="/coming-soon" className="navbar__list--link">
                  Digiwork
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="/coming-soon" className="navbar__list--link">
                  Market
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="/coming-soon" className="navbar__list--link">
                  More
                </Link>
              </li>
        </ui>

        <span className="Navbar__others">
          <FiBell className="navbar__icons" />
          <Profile />
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

export default ProfileHeader;
