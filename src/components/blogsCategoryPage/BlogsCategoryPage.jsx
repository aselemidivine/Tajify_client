import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogsCategoryPage = () => {
  const { id } = useParams(); // This retrieves the Category from the URL parameter

  const [blogsCategory, setBlogsCategory] = useState([]);

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/api/blogs/${id}`
        );
        if (response.data.data.blogs.category) {
          console.log(response);
          setBlogsCategory(response.data.data.blogs.category.slice(0, 7));
          //   setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // setLoading(false);
      }
    };

    fetchBlogsByCategory();
  }, [blogsCategory]);

  return <div>{blogsCategory.category}</div>;
};

export default BlogsCategoryPage;
