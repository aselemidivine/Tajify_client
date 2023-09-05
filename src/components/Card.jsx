import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";

function Card({ title, imagePath }) {

// const All_USERS_URL = `http://localhost:3005/users/${id}`; // Updated API URL

  const { token } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   setLoading(true);

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(All_USERS_URL, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (response.data) {
  //         // Handle the fetched data and set it in state
  //         // setPosts(response.data);
  //         setUser();
  //       } else {
  //         console.error("Error fetching user");
  //       }

  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [token]);

  return (
    <figure className="card__figure">
      <Link to={`/writers-profile`}>
        <img className="card__figure--image" src={imagePath} alt={title} />
        <p className="card__figure--title">{title}</p>
      </Link>
    </figure>
  );
}

export default Card;
