import React from "react";
import ExploreButton from "./ExploreButton";

import jobsImg from '../assets/images/hero-img/jobs.png';
import gigsImg from '../assets/images/hero-img/gigs.png';
import marketImg from '../assets/images/hero-img/market.png';
import coursesImg from '../assets/images/hero-img/courses.png';


function ExploreMore() {
    return (
        <section className="section explore-more__section">
            <div className="section__container explore-more">
                <div className="explore-more--text">
                    <h3 className="heading__tetariary">Explore more services</h3>
                    <p className="explore-more--description">Explore more on our platform as we bring you different  kind of services. </p>
                    <ExploreButton>Try tajify</ExploreButton>
                </div>
                <div className="explore-more--figures">
                    <div className="explore-more--figure">
                        <img src={jobsImg} alt="" />
                        <p>Jobs</p>
                    </div>
                    <div className="explore-more--figure">
                        <img src={gigsImg} alt="" />
                        <p>Gigs</p>
                    </div>
                    <div className="explore-more--figure">
                        <img src={marketImg} alt="" />
                        <p>Market</p>
                    </div>
                    <div className="explore-more--figure">
                        <img src={coursesImg} alt="" />
                        <p>Courses</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExploreMore
