import React from "react";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import { Link } from "react-router-dom";
const lists = ['Blogs', 'Gigs', 'Course', 'Market', 'Explore'];

import { LiaAngleDownSolid } from 'react-icons/lia';
import { FiBell } from 'react-icons/fi';
import { HiOutlinePencilSquare } from 'react-icons/hi2';


function SubHeader() {
    return (
        <header className='header'>
            <span className="header__logo">Tajify</span>
            <nav className="navbar">
              <ui className="navbar__list">
                {lists.map(list => {
                  return (
                  <li className="navbar__list--item" key={list}>
                    <Link to = "/writer" className="navbar__list--link">{list}</Link>
                  </li>
                  );
                })}
              </ui>
              <span className="Navbar__others">
                <HiOutlinePencilSquare className="navbar__icons"/>
                <FiBell className="navbar__icons"/>
                <Profile />
              </span>
            </nav>
        </header>
    );
};


function Profile() {
  return (
    <div className="header__profile--box">
      <div className="profile__image--box">
        <img src={profilePhoto} alt="profile image" className="profile__image"/>
      </div>
      <p className="profile__name">Aselemi Divine</p>
      <LiaAngleDownSolid className="navbar__icons"/>
    </div>
  );
}

export default SubHeader;