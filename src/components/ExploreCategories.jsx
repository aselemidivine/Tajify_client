import Card from "./Card"

import sportImg from '../assets/images/pngs/explore-category-1.png';
import entertainmentImg from '../assets/images/pngs/explore-category-2.png';
import lifyStyleImg from '../assets/images/pngs/explore-category-3.png';
import growthImg from '../assets/images/pngs/explore-category-4.png';
import financeImg from '../assets/images/pngs/explore-category-5.png';
import healthImg from '../assets/images/pngs/explore-category-6.png';
import technologyImg from '../assets/images/pngs/explore-category-7.png';


const categories = [
    {
        title: 'sports',
        imagePath: sportImg
    },
    {
        title: 'entertainment',
        imagePath: entertainmentImg
    },
    {
        title: 'lifestyle',
        imagePath: lifyStyleImg
    },
    {
        title: 'growth',
        imagePath: growthImg
    },
    {
        title: 'finance',
        imagePath: financeImg
    },
    {
        title: 'health',
        imagePath: healthImg
    },
    {
        title: 'technology',
        imagePath: technologyImg
    },
]

function ExploreCategories() {
    return (
        <section className="section explore-category__section">
            <div className="section__container explore-category">
                <h3 className="heading__tetariary">Explore categories</h3>
                <div className="category__cards" style={{gridTemplateColumns: `repeat(${categories.length}, 1fr)`}}>
                    {categories.map(category => {
                        return <Card key={category.title} title={category.title} imagePath={category.imagePath} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExploreCategories;
