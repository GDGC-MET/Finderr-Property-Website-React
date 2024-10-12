import React from 'react'
import './Get_Started.css'
const Get_Started = ()=>{
    return(
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get Started With Finderr</span>
                    <span className='secondaryText'>Look up for us everytime you are search for a property<br/>Happy Searching!</span>
                    <button className="button">
                        <a href="#">Contact Us Formally</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Get_Started