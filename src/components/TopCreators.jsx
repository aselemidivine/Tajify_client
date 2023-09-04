// import React from "react";
// import Card from "./Card";
// import creator1 from "../assets/images/pngs/creator-1.png";
// import creator2 from "../assets/images/pngs/creator-2.png";
// import creator3 from "../assets/images/pngs/creator-3.png";
// import creator4 from "../assets/images/pngs/creator-4.png";
// import creator5 from "../assets/images/pngs/creator-5.png";
// import { Link } from "react-router-dom";

// const creators = [
//   { name: "Steve Mount", imagePath: creator1 },
//   { name: "Foligo Mattew", imagePath: creator2 },
//   { name: "Sweety Favour", imagePath: creator3 },
//   { name: "Adesua Kay", imagePath: creator4 },
//   { name: "Bela Seun", imagePath: creator5 },
// ];

// function TopCreators() {
//   return (
//     <section className="section top-creator__section">
//       <div className="section__container">
//         <h3 className="heading__tetariary">Top creators</h3>
//         <div
//           className="top-creators__cards"
//           style={{ gridTemplateColumns: `repeat(${creators.length}, 1fr)` }}
//         >
//           {creators.map((creator) => {
//             return (
//               <div className="creator">
//                 <Card
//                   key={creator.name}
//                   imagePath={creator.imagePath}
//                   title={""}
//                 />
//                 <p>{creator.name}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TopCreators;



import React, { useState, useEffect } from "react";
import creator4 from "../assets/images/pngs/creator-4.png";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function TopCreators() {
  const { token } = useAuthContext();

  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of creators from your API
      fetch("http://localhost:3005/api/users/")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const users = data.data.users;
          setCreators(users.slice(0, 5));
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.error("Error fetching creators:", error);
        });
    }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="section top-creator__section">
      <div className="section__container">
        <h3 className="heading__tetariary">Top creators</h3>
        <div
          className="top-creators__cards"
          style={{
            gridTemplateColumns: `repeat(${creators.length || 0}, 1fr)`,
          }}
        >
          {Array.isArray(creators) && creators.length > 0 ? (
            creators.map((creator) => {
              return (
                <div className="creator" key={creator._id}>
                  <Link to={`/writers-profile/${creator._id}`}>
                    <figure className="card__figure">
                      <img
                        className="card__figure--image"
                        src={creator4}
                        // alt={title}
                      />
                      <p className="card__figure--title">{creator.username}</p>
                    </figure>
                  </Link>
                </div>
              );
            })
          ) : (
            <div>No creators found.</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TopCreators;
