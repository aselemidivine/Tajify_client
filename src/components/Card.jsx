import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";


function Card({ title, imagePath, categoryField }) {


  const { token } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);


  // useEffect(() => {
  //   // Fetch the list of creators from your API
  //     fetch(`http://localhost:3005/api/blogs`)
  //       .then((data) => {
  //         console.log(data);
  //         const users = data.category;
  //         setBlogs(users.slice(0, 5));
  //       })
  //       .catch((error) => {
  //         setLoading(false);
  //         console.error("Error fetching creators:", error);
  //       });
  //   }, []);

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
          setBlogs(response.data.data.blogs.slice(0, 3));
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

  

  return (
    <figure className="card__figure">
      <Link to={`/category/${categoryField}`}>

        <img className="card__figure--image" src={imagePath} alt={title} />
        <p className="card__figure--title">{title}</p>
      </Link>
    </figure>
  );
}

export default Card;
