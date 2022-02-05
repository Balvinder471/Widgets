import React from "react";

const Link = ({url ,children}) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey)
            return
        event.preventDefault()
        window.history.pushState({}, '', url)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }
   return (
       <a href={url} className="link-hover" onClick={onClick}>
           {children}
       </a>
   )
}

export default Link