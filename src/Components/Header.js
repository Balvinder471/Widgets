import React from "react";
import {MdWidgets} from "react-icons/md";

import Link from "./Link";

const Header = () => {
    return (
        <div className="flex items-center justify-between pl-4 pr-4 mb-[80px]">
            <div className="flex content-start gap-2 items-center font-bold italic">
                <Link url="/"> <MdWidgets size="25" color="gray" title="Widgets" /> </Link>
                <Link url="/">Widgets</Link>
            </div>
            <div className="flex content-start gap-6 items-center text-gray-300">
                <Link url="/">Accordion</Link>
                <Link url="/search" >Search</Link>
                <Link url="/dropdown">DropDown</Link>
                <Link url="/translate">Translate</Link>
            </div>
        </div>
    )
}

export default Header