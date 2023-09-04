import React from "react";


import SoftwareDev from '../assets/images/pngs/software-development.png'
import GraphicsDes from '../assets/images/pngs/graphics-design.png'
import EthicalHac from '../assets/images/pngs/ethical-hacking.png'
import ContentCre from '../assets/images/pngs/content-creation.png'
import DataAnaly from '../assets/images/pngs/data-analysis.png'
import PopularCoursesCards from "./PopularCoursesCards";


const coursesData = [
    {
        title: 'software development',
        imagePath: SoftwareDev
    },
    {
        title: 'graphic design',
        imagePath: GraphicsDes
    },
    {
        title: 'ethical hacking',
        imagePath: EthicalHac
    },
    {
        title: 'content creation',
        imagePath: ContentCre
    },
    {
        title: 'data analsis',
        imagePath: DataAnaly
    },
]
console.log(coursesData.length)


function MostPopularCourses() {
    return (
        <section className="course__section section">
            <div className="section__container">
                <h2 className="heading__tetariary">Popular Courses</h2>
                <div className="course__cards" style={{gridTemplateColumns: `repeat(${coursesData.length}, 1fr)`}}>
                    {coursesData.map(data => {
                       return <PopularCoursesCards title={data.title} imagePath={data.imagePath} key={data.title} />
                    })}
                </div>
            </div>
        </section>
    )
}



export default MostPopularCourses;
