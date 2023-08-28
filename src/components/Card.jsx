import { Link } from "react-router-dom";



function Card({ title, imagePath }) {
    return (
        <figure className="card__figure">
              <Link to="/writers-profile">
                <img className="card__figure--image" src={imagePath} alt={title} />
                <p className="card__figure--title">{title}</p>
              </Link>
            
        </figure>
    )
}

export default Card;