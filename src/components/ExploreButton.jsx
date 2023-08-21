import { BsFillArrowRightCircleFill } from 'react-icons/bs';


function ExploreButton({ children }) {
    return (
        <a href="#" className="content__button button">
            {children} <BsFillArrowRightCircleFill style={{display: 'inline'}} />
        </a>
    )
}

export default ExploreButton;
