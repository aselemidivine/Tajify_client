import React from "react";
import TopNews from "./TopNews";
import './../pages/blogHome/style.css';
import MostSearchedAndFeaturedArticles from './MostSearchedAndFeaturedArticles';


function TopNewsAndFeaturedArticles() {
    return (
        <section className="section">
            <div className="section__container topnews-and-article">
                <TopNews />
                <MostSearchedAndFeaturedArticles />
            </div>
        </section>
    )
}

export default TopNewsAndFeaturedArticles;
