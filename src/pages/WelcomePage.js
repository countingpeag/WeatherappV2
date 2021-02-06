import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return(
        <div>
            <Link to={"/main"}>Go to main</Link>
        </div>
    )
}

export default WelcomePage;