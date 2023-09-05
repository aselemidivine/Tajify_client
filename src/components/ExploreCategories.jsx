import Card from "./Card";

import sportImg from "../assets/images/pngs/explore-category-1.png";
import entertainmentImg from "../assets/images/pngs/explore-category-2.png";
import lifyStyleImg from "../assets/images/pngs/explore-category-3.png";
import growthImg from "../assets/images/pngs/explore-category-4.png";
import financeImg from "../assets/images/pngs/explore-category-5.png";
import healthImg from "../assets/images/pngs/explore-category-6.png";
import technologyImg from "../assets/images/pngs/explore-category-7.png";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "sport",
    imagePath: sportImg,
    categoryField: 'sport'
  },
  {
    title: "entertainment",
    imagePath: entertainmentImg,
    categoryField: 'entertainment'
  },
  {
    title: "lifestyle",
    imagePath: lifyStyleImg,
    categoryField: 'lifestyle'
  },
  {
    title: "travel",
    imagePath: growthImg,
    categoryField: 'travel'
  },
  {
    title: "finance",
    imagePath: financeImg,
    categoryField: 'finance'
  },
  {
    title: "health",
    imagePath: healthImg,
    categoryField: 'health'
  },
  {
    title: "technology",
    imagePath: technologyImg,
    categoryField: 'technology'
  },
];

function ExploreCategories({ category }) {
  const { token } = useAuthContext();
  const [blogs, setBlogs] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  

  return (
    <section className="section explore-category__section">
      <div className="section__container explore-category">
        <h3 className="heading__tetariary">Explore categories</h3>
        <div
          className="category__cards"
          style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}
        >
          {/* {blogs.map((blog) => (
              <div className="creator" key={blog._id}>
                <Link to={`/writers-profile/${blog._id}`}>
                  <figure className="card__figure">
                    <img
                      className="card__figure--image"
                      src={lifyStyleImg}
                      // alt={title}
                    />
                    <p className="card__figure--title">{blog.category}</p>
                  </figure>
                </Link>
              </div>
            ))} */}

          {categories.map((category) => {
            return (
              <Card
                key={category.title}
                title={category.title}
                imagePath={category.imagePath}
                // category={category.categoryField}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExploreCategories;
