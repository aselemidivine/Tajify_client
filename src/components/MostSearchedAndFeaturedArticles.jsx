import React from 'react';
import MostSearched from './MostSearched';
import FeaturedArticles from './FeaturedArticles';
import Jobs from './Jobs';


function MostSearchedAndFeaturedArticles() {
    return (
        <div>
            <MostSearched />
            <div className="ads__box--big">&nbsp;</div>
            <FeaturedArticles />
            <Jobs />
        </div>
    );
};


export default MostSearchedAndFeaturedArticles
