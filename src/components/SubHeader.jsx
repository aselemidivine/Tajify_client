import React, { useState } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import "../pages/blogHome/main.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FiBell } from "react-icons/fi";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const lists = ["Blogs", "Gigs", "Course", "Market", "Explore"];

function SubHeader() {
  return (
    <header className="header">
      <span className="header__logo">Tajify</span>
      <nav className="navbar">
        <ui className="navbar__list">
              <li className="navbar__list--item">
                <Link to="/writer" className="navbar__list--link">
                  Blogs
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="" className="navbar__list--link">
                  Gigs
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="" className="navbar__list--link">
                  Course
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="" className="navbar__list--link">
                  Market
                </Link>
              </li>
              <li className="navbar__list--item">
                <Link to="" className="navbar__list--link">
                  Explore
                </Link>
              </li>
        </ui>

        <span className="Navbar__others">
          <Link to="/editor">
            <HiOutlinePencilSquare className="navbar__icons" />
          </Link>

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

export default SubHeader;
