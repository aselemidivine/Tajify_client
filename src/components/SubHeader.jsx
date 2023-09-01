import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import "../pages/blogHome/main.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FiBell } from "react-icons/fi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useAuthContext } from "../context/AuthContext";

const lists = ["Blogs", "Gigs", "Course", "Market", "Explore"];

function SubHeader() {
  const { user } = useAuthContext();

  const activeLinkStyle = {
    fontWeight: "bold", // You can customize this style
    color: "blue", // Customize the text color for active links
    // Add more styles as needed
  };

  return (
    <header className="header">
      <span className="header__logo">Tajify</span>
      <nav className="navbar">
        <ui className="navbar__list">
          <li className="navbar__list--item">
            <NavLink exact to="/" className="navbar__list--link" activeStyle={activeLinkStyle}>
              Home
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/writer" className="navbar__list--link" activeStyle={activeLinkStyle}>
              Blogs
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/coming-soon" className="navbar__list--link" activeStyle={activeLinkStyle}>
              Gigs
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/coming-soon" className="navbar__list--link" activeStyle={activeLinkStyle}>
              Course
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/coming-soon" className="navbar__list--link" activeStyle={activeLinkStyle}>
              Market
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/coming-soon" className="navbar__list--link" activeStyle={activeLinkStyle}>
              Explore
            </NavLink>
          </li>
        </ui>

        <span className="Navbar__others">
          {user && (
            <>
              <Link to="/editor">
                <HiOutlinePencilSquare className="navbar__icons" />
              </Link>
              <FiBell className="navbar__icons" />
              <Profile />
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
