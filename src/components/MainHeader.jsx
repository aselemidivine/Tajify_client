import React from "react";
import { Link } from "react-router-dom";
import '../pages/blogHome/style.css'

const lists = ['Blogs', 'Gigs', 'Course', 'Market', 'Explore'];


function MainHeader() {
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
              <a href="/signup" className="nav__button">Get Started</a>
            </nav>
        </header>
    );
};

export default MainHeader;
