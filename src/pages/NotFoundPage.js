import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return(
        <div>
            <Link to={"/main"}>Go back to main</Link>
        </div>
    )
}

export default NotFoundPage