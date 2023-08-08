import HeroImgs from '../assets/images/hero-img/photo1.png';

import '../pages/blogHome/style.css'

function Hero() {
    return (
        <div className="hero__section">
            <div className="container">
                <div className="hero">
                    <div className="hero__text--box">
                        <h1 className="heading__primary">
                            Monitize your 
                            <span className="hero--extra">creativity</span> and trive in a digital world.
                        </h1>
                        <h4 className="heading__description">
                        The ultimate platform created with one purpose in mind: to help creators like you monetize your <span className="hero--extra">content, skills, knowledge, passion, followership, and writing abilities.</span>
                        </h4>
                        <form className="hero__form">
                            <input className='hero__input' />
                            <button className='hero__form--btn' type='button'>Search</button>
                        </form>

                        <div className="hero__stats">
                            {/* svg goes here */}
                            <Stat figure='1M+' text='services' />
                            <Stat figure='1200+' text='Active users' />
                        </div>
                    </div>
                    <div className="hero__images--box">
                        <img src={HeroImgs} alt="hero photo tajify" className="hero__image" />
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
