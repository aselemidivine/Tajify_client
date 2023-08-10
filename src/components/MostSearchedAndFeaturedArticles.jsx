import React from 'react';

const keywordsData = ['Messi', 'Endsars', 'Online money', 'dreams', 'manchester united', 'wealth', 'nigeria', 'tinubu', 'petrol price', 'election results']


function Keyword({ title }) {
    return <li><a href="#" className="keywork__link">{title}</a></li>
}

function MostSearchedAndFeaturedArticles() {
    const data = [...keywordsData];
    return (
        <div>
            <div className="mostSearched">
                <h3 className="heading__tetariary heading__underline">Most searched heywords</h3>
                <ol className="keywords__list">
                    <span>
                        {data.slice(0, 5).map((el) => {
                            return <Keyword title={el} key={el}/>
                        })}
                    </span>
                    <span>
                        {data.slice(5).map((el) => {
                            console.log(el)
                            return <Keyword title={el} key={el}/>
                        })}
                    </span>
                </ol>
            </div>

            <div className="ads__box--big">&nbsp;</div>

            <div className="featuredArticle">
                <h3 className="heading__tetariary heading__underline">Featured Articles</h3>

                
            </div>
        </div>
    );
}



export default MostSearchedAndFeaturedArticles
