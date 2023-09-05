import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

function Card({ title, imagePath  }) {
  const { token } = useAuthContext();

  // useEffect(() => {
  //   console.log(blogs);
  // }, [blogs]);

  // useEffect(() => {
  //   const fetchBlogsByCategory = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3005/api/blogs/category/${category}`
  //       );
  //       if (response.data) {
  //         console.log(response);
  //         // setBlogsCategory(response.data.data.blogs.category);
  //         setBlogs(response.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching blogs:", error);
  //     }
  //   };

  //   fetchBlogsByCategory();
  // }, []);

  return (
    <Link to={`/category/${title}`}>
    {/* <Link to={`/category/${categoryField}`}> */}
      {/* <Link to={"/category"}> */}
      <figure className="card__figure">
        <img className="card__figure--image" src={imagePath} alt={title} />
        <p className="card__figure--title">{title}</p>
      </figure>
    </Link>
  );
}

export default Card;
