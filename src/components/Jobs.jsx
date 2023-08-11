import React from "react";
import { BiSolidRightArrowAlt } from 'react-icons/bi';

function Jobs() {
    return (
        <div className="jobs">
            <span className='job-head'>
                <h3 className="heading__tetariary">Jobs</h3>
                <a href='#' className='view-more'>view more...</a>
            </span>

            <div className="jobs__cards">
                <div className="job__figure">
                    <span className="job__title-head">
                        <h3 className="job__title">{Jobs.title}</h3>
                        <BiSolidRightArrowAlt />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Jobs;