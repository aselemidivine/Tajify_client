import React from "react";
import '../pages/blogHome/style.css';
import courseData from '../pages/blogHome/courseData'


function PopularCourses() {
    return (
        <section className="course__section section">
            <div className="section__container">
                <div className="course__cards">
                    {courseData.map(data => {
                       return <Card title={data.title} imagePath={data.imagePath} />
                    })}
                </div>
            </div>
        </section>
    )
}

function Card({ title, imagePath }) {
    return (
        <figure className="card__figure">
            <img className="card__figure--image" src={imagePath} alt={title} />
            <p className="card__figure--title">{title}</p>
        </figure>
    )
}

export default PopularCourses
