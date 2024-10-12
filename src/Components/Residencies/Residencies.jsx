import React from 'react'
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'Swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
const Residencies = ()=>{
    return(
        <section className='r-wrapper'>
            <div className='paddings innerWidth r-container'>
                <div className="flexColStart innerr-head">
                    <span className='orangeText'>
                        Best Choices
                    </span>
                    <span className='primaryText'>
                        Popular Residences
                    </span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                        {data.map((card,i) => (
                            <SwiperSlide key={i}>
                                <div className='flexColStart r-card'>
                                    <img src={card.image} alt="home"></img>
                                    <span className='secondaryText r-price'>
                                        $
                                    </span>
                                    <span  className='secondaryText r-price'>
                                        {card.price}
                                    </span>
                                    <span className='primaryText'>
                                        {card.name}
                                    </span>
                                    <span className='secondaryText'>
                                        {card.detail}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies 

const SliderButtons = ()=>{
    const swiper = useSwiper();

    return(
        <div className='flexCenter r-button'>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}