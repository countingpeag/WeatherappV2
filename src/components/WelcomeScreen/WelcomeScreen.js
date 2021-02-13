import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const WelcomeScreen = ({ children }) => {

    const myRefDiv = useRef(null)

    //In the first renderitation myRefDiv.current is equals to null
    console.log("MyRefDiv.current: ", myRefDiv.current)

    return(
        <div ref={myRefDiv}> 
            Welcome Screen
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen