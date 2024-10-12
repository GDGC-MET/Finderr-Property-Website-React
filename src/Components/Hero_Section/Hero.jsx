import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () =>{
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="hero-left">
                    <div className="flexColStart hero-title">
                        <div className="orange-circle"/>
                        <h1>Get the <br/>property of <br/>your dreams!</h1>
                    </div>
                    <div className="flexColStart her-desc">
                        <span className='secondaryText'/>
                            Find your dream home from a variety of great and affoardable selections
                        
                        <span className='secondaryText'/>
                            Forget all the difficulties in searching the best property for you. 
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start ={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Apartments</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start ={0} end={800} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Awards</span>
                        </div>
                    </div>
                    
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image-resize.png" alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero