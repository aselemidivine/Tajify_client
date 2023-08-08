import HeroImg from '../assets/images/hero-img/photo1.png';
import  ShiedSVG from '../assets/images/hero-img/sheild.svg';
import { AiOutlineSearch } from "react-icons/ai";
import '../pages/blogHome/style.css';


function Hero() {
    return (
        <div className="hero__section">
            <div className="section__container">
                <div className="hero">
                    <div className="hero__text--box">
                        <h1 className="heading__primary">
                            Monitize Your&nbsp;
                            <span className="hero--extra">Creativity</span> and Trive in the Digital World.
                        </h1>
                        <h4 className="heading__description">
                        The ultimate platform created with one purpose in mind: to help creators like you monetize your&nbsp;<span className="hero--extra">content, skills, knowledge, passion, followership, and writing abilities.</span>
                        </h4>
                        <form className="hero__form">
                            <i className='hero__form--icon'>
                                <AiOutlineSearch />
                            </i>
                            <input className='hero__form--input' />
                            <button className='hero__form--btn' type='button'>Search</button>
                        </form>

                        <div className="hero__stats">
                           
                            <Stat figure='1M+' text='services' />
                            <Stat figure='1200+' text='Active users' />
                        </div>
                    </div>
                    <div className="hero__images--box">
                        <img src={HeroImg} alt="hero photo tajify" className="hero__image" />
                    </div>
                </div>
            </div>
        </div>
    )
}


function Stat({ figure, text }) {
    return (
        <div className="stat">
            <p className="stat--figure">{figure}</p>
            <p className="stat--text">{text}</p>
        </div>
    )
}

export default Hero
