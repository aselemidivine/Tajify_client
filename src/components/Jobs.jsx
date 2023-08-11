import React from "react";
import { BiSolidRightArrowAlt } from 'react-icons/bi';

const jobsData = [
    {title: 'Senior Web Developer', text: '4 years Experience and Proficient with HTML, CSS, JavaScript. also have knowledge of PHP..'},
    {title: 'Senior Web Developer', text: '4 years Experience and Proficient with HTML, CSS, JavaScript. also have knowledge of PHP..'},
    {title: 'Senior Web Developer', text: '4 years Experience and Proficient with HTML, CSS, JavaScript. also have knowledge of PHP..'},
    {title: 'Senior Web Developer', text: '4 years Experience and Proficient with HTML, CSS, JavaScript. also have knowledge of PHP..'},
    {title: 'Senior Web Developer', text: '4 years Experience and Proficient with HTML, CSS, JavaScript. also have knowledge of PHP..'},
    {title: 'Senior Web Developer', text: '4 years Experience and Proficient with HTML, CSS, JavaScript. also have knowledge of PHP..'},
]

function Jobs() {
    return (
        <div className="jobs">
            <span className='job-head'>
                <h3 className="heading__tetariary">Jobs</h3>
                <a href='#' className='view-more'>view more...</a>
            </span>

            <div className="jobs__cards">
                {jobsData.map(job => {
                    return <div className="job__figure">
                        <span className="job__title-head">
                            <h3 className="job__title">{job.title}</h3>
                            <BiSolidRightArrowAlt />
                        </span>
                        <p className="job__text">{job.text}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Jobs;