import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import "../pages/blogHome/main.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsBell } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { useAuthContext } from "../context/AuthContext";
import DropdownMenu from "./DropdownMenu";

const lists = ["Blogs", "Gigs", "Course", "Market", "Explore"];

function SubHeader() {
  const { user } = useAuthContext();
  const [isRegistered, setIsRegistered] = useState(true);

  const activeLinkStyle = {
    fontWeight: "bold", // You can customize this style
    color: "blue", // Customize the text color for active links
  };

  return (
    <header className="header">
      <NavLink to="/">
        <span className="header__logo header__logo-2">Tajify</span>
      </NavLink>
      <nav className="navbar">
        <ui className="navbar__list">
          <li className="navbar__list--item">
            <NavLink
              exact
              to="/writer"
              className="navbar__list--link"
              activeStyle={activeLinkStyle}
            >
              Blogs
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink
              to="/coming-soon"
              className="navbar__list--link"
              activeStyle={activeLinkStyle}
            >
              Gigs
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink
              to="/coming-soon"
              className="navbar__list--link"
              activeStyle={activeLinkStyle}
            >
              Course
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink
              to="/coming-soon"
              className="navbar__list--link"
              activeStyle={activeLinkStyle}
            >
              Market
            </NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink
              to="/coming-soon"
              className="navbar__list--link"
              activeStyle={activeLinkStyle}
            >
              Explore
            </NavLink>
          </li>
        </ui>

        {/* {isRegistered ? (
            <>
              <Link to="/editor">
                <SlNote className="navbar__icons" />
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
                <SlNote className="navbar__icons" />
              </Link>
              <BsBell className="navbar__icons" />
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
        <div className="profile__image--box">
          <img
            src={profilePhoto}
            alt="profile image"
            className="profile__image"
          />
        </div>
      </Link>
      <p className="profile__name">Aselemi Divine</p>
      <LiaAngleDownSolid className="navbar__icons" onClick={toggleDropdown} />
      {isDropdownOpen && (
        // <div className="profile__dropdown-menu">
        //   <Link to="/profile" className="dropdown-menu__link">
        //     Profile
        //   </Link>
        //   <Link to="/settings" className="dropdown-menu__link">
        //     Settings
        //   </Link>
        //   <button className="dropdown-menu__link">Logout</button>
        // </div>
        <DropdownMenu />
      )}
    </div>
  );
}

export default SubHeader;
