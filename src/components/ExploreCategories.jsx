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
    title: "sports",
    imagePath: sportImg,
  },
  {
    title: "entertainment",
    imagePath: entertainmentImg,
  },
  {
    title: "lifestyle",
    imagePath: lifyStyleImg,
  },
  {
    title: "growth",
    imagePath: growthImg,
  },
  {
    title: "finance",
    imagePath: financeImg,
  },
  {
    title: "health",
    imagePath: healthImg,
  },
  {
    title: "technology",
    imagePath: technologyImg,
  },
];

function ExploreCategories({ category }) {
  const { token } = useAuthContext();
  const [blogs, setBlogs] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     setLoading(true);

  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:3005/api/blogs?category=sport`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });

  //         if (response.data.data.blogs) {
  //           // Filter blogs by category
  //           const filteredBlogs = response.data.data.blogs.filter(blog => blog.category === "sport");

  //           // Slice the filtered blogs to get a subset (e.g., first 6 blogs)
  //           const slicedBlogs = filteredBlogs.slice(0, 7);

  //           // Handle the fetched data and set it in state
  //           setPosts(slicedBlogs);
  //         } else {
  //           console.error("Error fetching posts");
  //         }

  //         setLoading(false);
  //       } catch (error) {
  //         console.error("Error:", error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, [token]);

  // useEffect(() => {
  //     setLoading(true);

  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:3005/api/blogs?category`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });

  //         if (response.data.data.blogs.category) {
  //             console.log(response.data.data.blogs.category)
  //           // Handle the fetched data and set it in state
  //           setPosts(response.data.data.blogs.slice(0, 7)); // Slice the first 7 blogs
  //         }
  //         setLoading(false);
  //       } catch (error) {
  //         console.error("Error:", error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, [token]);

  //   return (
  //     <div>
  //       {/* <h2>{category.toUpperCase()} Blogs</h2> */}
  //       {loading ? (
  //         <p>Loading...</p>
  //       ) : (
  //         <section className="section explore-category__section">
  //           <div className="section__container explore-category">
  //             <h3 className="heading__tetariary">Explore categories</h3>
  //             <div
  //               className="category__cards"
  //               style={{ gridTemplateColumns: `repeat(${blogs.length}, 1fr)` }}
  //             >
  //               {blogs.map((blog) => (
  //                 <div className="creator" key={blog._id}>
  //                   <Link to={`/writers-profile/${blog._id}`}>
  //                     <figure className="card__figure">
  //                       <img
  //                         className="card__figure--image"
  //                         src={lifyStyleImg}
  //                         // alt={title}
  //                       />
  //                       <p className="card__figure--title">{blog.category}</p>
  //                     </figure>
  //                   </Link>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </section>
  //       )}
  //     </div>
  //   );

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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExploreCategories;
