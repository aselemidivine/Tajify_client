
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineCalendar, AiOutlineComments } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import Lifestyle from "../assets/images/pngs/lifestyle.png";
import profilePhoto3 from "../assets/images/profile-image.jfif";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const All_BLOGS_URL = "http://localhost:3005/api/blogs"; // Updated API URL

const BlogCategory = ({ category }) => {
  const { token } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(All_BLOGS_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.data.blogs) {
          // Handle the fetched data and set it in state
          // setPosts(response.data);
          setPosts(response.data.data.blogs.slice(0, 3));
        } else {
          console.error("Error fetching posts");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);



//   try {
//     // Toggle follow state and send a request to update the server
//     const newFollowState = !isFollowing;
//     setIsFollowing(newFollowState);

//     // Send a request to update follow status on the server
//     await axios.post(`/api/posts/${postId}/follow`, { isFollowing: newFollowState });
//   } catch (error) {
//     console.error('Error updating follow status:', error);
//   }
// };

// const handleLike = async () => {
//   try {
//     // Increment like count and send a request to update the server
//     setLikeCount(likeCount + 1);

//     // Send a request to update like count on the server
//     await axios.post(`/api/posts/${postId}/like`);
//   } catch (error) {
//     console.error('Error updating like count:', error);
//   }
// };

// const handleComment = async () => {
//   try {
//     // Increment comment count and send a request to update the server
//     setCommentCount(commentCount + 1);

//     // Navigate to the comment section (you may use React Router for this)
//   } catch (error) {
//     console.error('Error updating comment count:', error);
//   }
// };





  return (
    <BlogCategoryContainer>
      <div className="blog__category__container">
        {/* Render your posts here */}
        {posts.map((post) => (
          <div key={post._id} className="lifestyle">
            <div className="wrapper__div">
              <div className="header-box"></div>
              <div className="bold__text">{post.category}</div>
            </div>
            <div className="main__news">
              {/* <Link to="/writers-profile"> */}
              <Link to={`/details/${post._id}`}>
              
                <img
                  src={Lifestyle}
                  className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
                  alt="Sport"
                />
              </Link>
              <h1 className="bold__text">{post.title}</h1>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link to="/writers-profile">
                    <img
                      src={profilePhoto3}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </Link>
                  <div>
                    <p className="text-[12px] text-gray-800">John Doe</p>
                    <p className="text-gray-600 text-sm"></p>
                  </div>
                  <p className="mt-2 text-gray-700"></p>
                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[12px]">
                      {new Date(post.date).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <LiaComments className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[12px]">23 Comm</span>
                  </div>
                </div>
                <div className="span__light">{post.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BlogCategoryContainer>
  );
};

export default BlogCategory;

const BlogCategoryContainer = styled.div`
  .blog__category__container {
    max-width: 120rem;
    display: flex;
    margin-top: 34px;
    margin-bottom: 10px;
    margin-top: 98px;
    justify-content: space-between;
  }

  .wrapper__div {
    display: flex;
    align-items: end;
    max-width: 158px;
  }
  .header-box {
    width: 11px;
    height: 29px;
    color: black;
    margin-right: 11px;
    background-color: #4caf50;
  }

  .span__light {
    font-size: 11px;
  }

  .bold__text {
    color: #000;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .main__news {
    max-width: 400px;
    margin-right: 23px;
    margin-top: 20px;
    margin-bottom: 27px;
  }

  .featured__news_1 {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 16px;
  }

  .featured__news {
    margin-right: 23px;
  }

  .featured__news_img {
    margin-right: 10px;
    img {
      width: 485px;
    }
  }

  .news__img {
    width: 330px;
    height: 127px;
    margin-right: 9px;
  }

  .lifestyle {
    width: 400px;
  }

  // .lifestyle {
  //   display: flex;
  //   flex-wrap: wrap; /* Allow cards to wrap to the next line */
  //   justify-content: space-between; /* Distribute cards evenly across the row */
  // }

  // /* Adjust card width based on screen size */
  // .main__news,
  // .featured__news {
  //   flex: 0 0 calc(50% - 12px); /* Initially 2 cards per row on screens above 768px */
  //   margin-bottom: 20px; /* Space between rows */
  // }

  @media (max-width: 768px) {
    .blog__category__container {
      display: flex;
      flex-wrap: wrap;
    }
    .main__news,
    .featured__news {
      flex: 0 0 100%; /* 1 card per row */
    }
  }
`;
