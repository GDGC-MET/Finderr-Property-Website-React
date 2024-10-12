import React from 'react'
import { useState } from 'react';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion.jsx'
const Value = ()=>{
    return(
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left section  */}
                <div className="v-left">
                    <div className="image-container">
                    <img src='./value-2-resize.png' alt=''></img>
                    </div>
                </div>
                {/* right section  */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>
                        Our Value
                    </span>
                    <span className='valueprovide'>
                        The Value We Provide To You
                    </span>
                    <span className='secondaryText'>
                        We are always ready to provide great service to our customers
                        <br/>
                        We believe a good lifestyle begins with choosing the right place to live
                    </span>

                    <Accordion className='accordion'
                    allowMultipleExpanded = {false}
                    preExpanded={[0]}
                    >
                    {
                        data.map((item,i) =>{
                            return(
                                <AccordionItem className={'accordionItem'} key={i} uuid={i}>
                                <AccordionItemHeading>
                                <AccordionItemButton className='flexCenter accordionButton'>
                                <div className='flexCenter icon'>
                                    {item.icon}
                                </div>
                                <span className='primaryText'>
                                    {item.heading}
                                </span>
                                <div className='flexCenter icon'>
                                    <MdOutlineArrowDropDown size={20}> 
                                    </MdOutlineArrowDropDown>
                                </div>
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                                
                                </AccordionItem>
                            )
                            
                        
                        }
                    )}
                    </Accordion>
                    
                <div/>
            </div>
        </div>
        </section>
    )
}
export default Value