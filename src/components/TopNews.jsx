import React from 'react';
import News from './News';


const NewsData = [
    {
        title: 'Succession finale: jeremy strong keall’s struggles what comes next.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: '../assets/images/pngs/article1.png'
    },
    {
        title: 'Critic’s notebook: deep dives into justice from Shakespeare and Atticus finch.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: '../assets/images/pngs/article1.png'
    },
    {
        title: 'Trump administration officials, have used veto power over other companies, forcing them.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: '../assets/images/pngs/article1.png'
    },
    {
        title: 'Leslie Moonves Speaks on CBS Earnings Cabunsot About Harassment Allegations.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: '../assets/images/pngs/article1.png'
    },
]

const NewsData2 = [
    {
        title: 'Robots or Job Training: Manuterges Grapple With How to Improve Their Econ....',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: '../assets/images/pngs/article1.png'
    },
    {
        title: 'Moving From Buyer to Seller, Major League Soccer Revenue In The World Wide Claims....',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: '../assets/images/pngs/article1.png'
    },
    {
        title: 'Group continues to sell and market memberships to Premier country club despite.',
        date: '23rd September 2023',
        comments: '6 comments',
        text: 'But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.... ',
        imagePath: '../assets/images/pngs/article1.png'
    },
]



function TopNews() {
    return (
        <section className='section topnews__section'>
            <div className="section__container">
                <h3 className="heading__tetariary">Top news</h3>

                <div className="news__cards">
                    {NewsData.map((data, i) => {
                        console.log(i)
                        return <News key={data.name} title={data.title} text={data.text} date={data.date} comments={data.comments} image={data.imagePath} />
                    })}
                    <div className="ads__box--big">&bsp;</div>
                    {NewsData2.map((data, i) => {
                        console.log(i)
                        return <News key={data.name} title={data.title} text={data.text} date={data.date} comments={data.comments} image={data.imagePath} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default TopNews;