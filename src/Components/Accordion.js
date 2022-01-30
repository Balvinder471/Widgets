import React, {useState} from "react";

import {MdArrowDropDown} from "react-icons/md";

const Accordion = ({items}) => {
    const [active, setActive] = useState(null)
    const onTitleClick = (event, index) => {
        const div = event.currentTarget.querySelectorAll("div")[1]
        if(!div.classList.contains("inactive"))
            return
        else
            setActive(index+1)
    }


    const renderedItems = items.map(({title, content}, index) => {
        const current = active === index+1 ? '' : 'inactive'
        const currentParent = active === index+1 ? '' : 'text-gray-400'
        return (
            <div key={title} onClick={(event) => onTitleClick(event, index)} className={`border border-b-0 border-gray-300 border-solid first:rounded-tr-lg last:rounded-br-lg last:border-b  w-1/4  hover:text-black flex flex-col gap-[20px] items-start pl-4 pt-4 pb-4 ${currentParent}`}>
                <div className="flex gap-1 items-center">
                    <MdArrowDropDown size="20"/>
                    {title}
                </div>
                <div className={`transition-all origin-top duration-100 ${current}`}>
                    {content}
                </div>
            </div>
        )
    })
   return (
       <div className="flex flex-col  items-start">
           {renderedItems}
       </div>
   )
}

export default Accordion