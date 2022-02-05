import React, {useEffect, useRef, useState} from "react";
import {MdArrowDropDown} from "react-icons/md";

const Dropdown = ({options, selected, onSelectedChange, label}) => {

    const [open, setOpen] = useState(false)
    const ref = useRef()
    useEffect(() => {
        document.addEventListener("click", (event) => {
            if(!ref.current.contains(event.target))
                setOpen(false);
        })
    }, [])

    const selectedClickHandler = (event) => {
        if(event.target === event.currentTarget)
            return
        onSelectedChange(options.filter((option) => option.label === event.target.innerHTML)[0])
    }

    const renderedOptions = options.map((option)=> {
        if(option.value === selected.value)
            return null
        return (
            <div key={option.value} className="hover:bg-gray-400 hover:cursor-grabbing">
                {option.label}
            </div>
        )
    })
    return (
        <div>
            <h3 className="text-center">{label}</h3>
        <div onClick={() => setOpen(!open)} ref={ref} className={`flex flex-col gap-2 w-1/4 pl-2 pr-2 pb-1 pt-1 mx-auto mt-2 border border-gray-300 border-solid rounded-sm ${open ? '' : 'hover:outline hover:outline-1 hover:outline-black'}`}>
            <div className="flex justify-between items-center">
                <div>{selected.label}</div>
                <MdArrowDropDown size="25" color="gray" />
            </div>
            <div className={ `flex flex-col gap-2 ease-linear transition-scale origin-bottom-right ${open ? 'duration-300' : 'inactive duration-150'}`} onClick={(event) => selectedClickHandler(event) }>
            {renderedOptions}
            </div>
        </div>
        </div>
    )
}

Dropdown.defaultProps = {
    label : "Select Something : "
}

export default Dropdown