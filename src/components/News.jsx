import React from "react";

import { AiOutlineCalendar } from 'react-icons/ai';
import { LiaComments } from 'react-icons/lia';

function News({ image, title, date, comments, text }) {
    return (
        <div className="news__figure">
            <div className="news__image--box">
                <img src={image} alt={title} className="news__image" />
            </div>
            <div className="news__content--box">
                <h4 className="news__title">{title}</h4>
                <span className="news__date--box">
                    <span>
                        <AiOutlineCalendar /> 
                        <p>{date}</p>
                    </span>
                    <span>
                        <LiaComments />
                        <p>{comments}</p>
                    </span>
                </span>
                <p className="news__text">{text}</p>
            </div>
        </div>
    )
}

export default News;
