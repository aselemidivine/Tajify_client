import { HiOutlineDotsVertical } from 'react-icons/hi';


function Article({ image, AvatarImg, articleAuthor, articleTime, articleHeading, articleWriteup, articleViews, articleLikes, articleComments }) {
    return (
        <figure className="article__figure">
            <div className="article__image--box">
                <img src={image} alt={`article on ${image}`} className="article__image" />
            </div>
            <div className="article__content--box">
                <div className="article__author-info">
                    <img src={AvatarImg} alt={`author image: ${AvatarImg}`} className="article-author__image" />
                    <span className="author">
                        <h4 className="article__author">{articleAuthor}</h4>
                        <p className="article__time">{articleTime}</p>
                    </span>
                        <HiOutlineDotsVertical style={{cursor: 'pointer', marginLeft: 'auto'}}/>
                </div>
                <h3 className='article__heading'>{articleHeading}</h3>
                <p className="article__text">{articleWriteup}</p>

                <div className="article__social-info">

                </div>
            </div>
        </figure>
    )
}

export default Article
