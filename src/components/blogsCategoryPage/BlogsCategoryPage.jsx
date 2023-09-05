import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import creator4 from "../../assets/images/pngs/writers-1.png";


const BlogsCategoryPage = () => {
  const { category } = useParams(); // This retrieves the Category from the URL parameter

  const [blogsCategory, setBlogsCategory] = useState([]);

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/api/blogs/category/${category}`
          // "http://localhost:3005/api/blogs/category/travel"
        );
        if (response.data.data.blogs) {
          console.log(response);
          setBlogsCategory(response.data.data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogsByCategory();
  }, []);

  return (
    <div className="creator">
        {/* <figure className="card__figure">
          <img
            className="card__figure--image"
            // src={creator4}
            // alt={title}
          />
          <p className="card__figure--title">{blogsCategory.content}</p>
        </figure> */}
         <h2>{category.toUpperCase()} Blogs</h2>
      <ul>
        {blogsCategory.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            {/* Render other blog details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );

  // return <div>{blogsCategory.title}</div>;
};

export default BlogsCategoryPage;