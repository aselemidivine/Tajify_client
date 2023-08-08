import React from "react";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";

import '../pages/blogHome/style.css'
const lists = ['Blogs', 'Gigs', 'Course', 'Market', 'Explore']


function Header() {
    return (
        <header className='header'>
            <span className="header__logo">Tajify</span>
            <nav className="navbar">
                <ui className="navbar__list">
                  {lists.map(list => {
                    return (
                    <li className="navbar__list--item">
                        <a href="#" className="navbar__list--link">{list}</a>
                    </li>
                    );
                  })}
                </ui>
                <a href="/signup" className="nav__button">Get Started</a>
            </nav>
        </header>
    );
};


function Profile() {
  return (
    <div className="header__profile--box">
      {/* notify-icon */}

      <div className="profile__image--box">
        <img src={profilePhoto} alt="profile image" className="profile__image"/>
        <p className="profile__name">Andrew</p>
      </div>
    </div>
  );
}

export default Header;

// #008001
// #FFC107
// #FF0066
