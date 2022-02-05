import {useEffect, useState} from "react";

const Route = ({url, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
    }

    useEffect(() => {
        window.addEventListener('popstate', onLocationChange)
        return () => window.removeEventListener('popstate', onLocationChange)
    }, [])

    return url === currentPath ? children : null
}

export default Route