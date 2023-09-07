import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import "../pages/blogHome/main.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsBell } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { useAuthContext } from "../context/AuthContext";
import DropdownMenu from "./DropdownMenu";
import Notification from "./notification/Notification";

const lists = ["Blogs", "Gigs", "Course", "Market", "Explore"];

function SubHeader() {
  const { user } = useAuthContext();


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
              <div className="profile__bane--container">
                <NotificationIcon />
              </div>
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

function NotificationIcon() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add the event listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the event listener when the dropdown is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="header__profile--box"  onClick={toggleDropdown}>
      <BsBell className="navbar__icons" />
      {isDropdownOpen && <Notification toggleDropdown={toggleDropdown} />}
    </div>
  );
}

function Profile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add the event listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the event listener when the dropdown is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
      {/* <div className="outsideclick">

      </div> */}
      <LiaAngleDownSolid className="navbar__icons" onClick={toggleDropdown} />
      {isDropdownOpen && <DropdownMenu toggleDropdown={toggleDropdown} />}
    </div>
  );
}

export default SubHeader;
