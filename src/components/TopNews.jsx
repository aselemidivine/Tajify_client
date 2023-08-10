import React from 'react';
import News from './News';
import './../pages/blogHome/style.css';

import article1 from '../assets/images/pngs/article1.png';
import article2 from '../assets/images/pngs/article2.png';
import article3 from '../assets/images/pngs/article3.png';
import article4 from '../assets/images/pngs/article4.png';
import article5 from '../assets/images/pngs/article5.png';
import article6 from '../assets/images/pngs/article6.png';
import article7 from '../assets/images/pngs/article7.png';


const NewsData = [
    {
        title: 'Succession finale: jeremy strong keall’s struggles what comes next.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: article1
    },
    {
        title: 'Critic’s notebook: deep dives into justice from Shakespeare and Atticus finch.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: article2
    },
    {
        title: 'Trump administration officials, have used veto power over other companies, forcing them.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: article3
    },
    {
        title: 'Leslie Moonves Speaks on CBS Earnings Cabunsot About Harassment Allegations.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: article4
    },
]

const NewsData2 = [
    {
        title: 'Robots or Job Training: Manuterges Grapple With How to Improve Their Econ....',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: article5
    },
    {
        title: 'Moving From Buyer to Seller, Major League Soccer Revenue In The World Wide Claims....',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: article6
    },
    {
        title: 'Group continues to sell and market memberships to Premier country club despite.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: article7
    },
];

import { MdKeyboardDoubleArrowDown } from 'react-icons/md';



function TopNews() {
    return (
        <div className="topnews">
            <h3 className="heading__tetariary">Top news</h3>
            <div className="news__cards">
                {NewsData.map(data => {
                    return <News key={data.name} title={data.title} text={data.text} date={data.date} comments={data.comments} image={data.imagePath} />
                })}
                <div className="ads__box--big">&nbsp;</div>
                {NewsData2.map(data => {
                    return <News key={data.name} title={data.title} text={data.text} date={data.date} comments={data.comments} image={data.imagePath} />
                })}
            </div>
            <span style={{display: 'flex', justifyContent: 'center'}}>
                <a href='#'><MdKeyboardDoubleArrowDown style={{color: '#FF0066', fontSize: '2.4rem'}}/></a>
            </span>
        </div>      
    )
}

export default TopNews;