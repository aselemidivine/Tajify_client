import React from "react";
import Article from "./Article";
import AvatarImg from './../assets/images/pngs/avatar.png';
import Webdes from './../assets/images/pngs/webdev-design.png';
import IceCream from './../assets/images/pngs/ice-cream.png';
import Photograph from './../assets/images/pngs/photograph.png';


function TreadingArticles() {
    return (
        <section className="section trending-article__section">
            <div className="section__container">
                <h2 className="heading__tetariary">Trending Articles</h2>
                <div className="article__cards">
                    <Article image={Webdes} AvatarImg={AvatarImg} 
                    articleAuthor={'dennis moses'}
                    articleTime={'25 mins ago'}
                    articleHeading={'6 Powerful Tips To Creating Testimonials That Sell Your Products Fast'}
                    articleWriteup={'In the last 10 years Americans have seen a boom in local food markets and for good reason. While Americans continue to buy more fast food, they still expect perf......'}
                    articleViews={35}
                    articleLikes={567}
                    articleComments={7}
                    />
                    <Article image={IceCream} AvatarImg={AvatarImg} 
                    articleAuthor={'martha Fredric'}
                    articleTime={'3 mins ago'}
                    articleHeading={'6 Powerful Tips To Creating Testimonials That Sell Your Products Fast'}
                    articleWriteup={'In the last 10 years Americans have seen a boom in local food markets and for good reason. While Americans continue to buy more fast food, they still expect perf......'}
                    articleViews={56}
                    articleLikes={749}
                    articleComments={14}
                    />
                    <Article image={Photograph} AvatarImg={AvatarImg} 
                    articleAuthor={'Idowu olatunji'}
                    articleTime={'52 mins ago'}
                    articleHeading={'6 Powerful Tips To Creating Testimonials That Sell Your Products Fast'}
                    articleWriteup={'In the last 10 years Americans have seen a boom in local food markets and for good reason. While Americans continue to buy more fast food, they still expect perf......'}
                    articleViews={13}
                    articleLikes={35}
                    articleComments={2}
                    />
                </div>
            </div>
            
        </section>
    )
}

export default TreadingArticles
