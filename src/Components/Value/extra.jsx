<Accordion
allowMultipleExpanded = {false}
preExpanded={[0]}
/>
    {data.map((item,i) =>{
        return(
            <AccordionItem className='accordionItem' key={i} uuid={i}>
            <AccordionItemHeading>
                <AccordionItemButton>
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
        </AccordionItem>
    )
}
