import { AiOutlineHeart } from 'react-icons/ai';
import { LiaComments } from 'react-icons/lia'

function ArticleSocialInfo({ avatarImg, articleComments, articleViews, articleLikes }) {
    return (
        <div className="article__social--info">
            <div className="social--info">
                <span className="views--images">
                    <img src={avatarImg} alt={'auticle views'} />
                    <img src={avatarImg} alt={'auticle views'} />
                    <img src={avatarImg} alt={'auticle views'} />
                    <img src={avatarImg} alt={'auticle views'} />
                </span>
                <p className="article__social--figure">+ {articleViews} views</p>
            </div>
            <div className="social--info">
                <AiOutlineHeart />
                <p className="article__social--figure">
                    {articleLikes} likes
                </p>
            </div>
            <div className="social--info">
                <LiaComments />
                <p className="article__social--figure">
                    {articleComments} comments
                </p>
            </div>
        </div>
    )
}

export default ArticleSocialInfo;
