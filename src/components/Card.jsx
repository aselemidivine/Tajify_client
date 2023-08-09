
function Card({ title, imagePath }) {
    return (
        <figure className="card__figure">
            <a href="#">
                <img className="card__figure--image" src={imagePath} alt={title} />
                <p className="card__figure--title">{title}</p>
            </a>
        </figure>
    )
}

export default Card;