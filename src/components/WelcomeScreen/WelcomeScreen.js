import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {

    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)

    //In the first renderitation myRefDiv.current is equals to null
    console.log("MyRefDiv.current: ", myRefDiv.current)

    useEffect(() => {
        console.log("MyRefDiv.current (useEffect): ", myRefDiv.current)

        if(!vanta){

            setVanta(Clouds ({
                THREE,
                el: myRefDiv.current
            }))

            console.log("We set vanta variable to a different number than 0")
        }

        //At momment to out of the the screen we must stop the effect 
        //and dismatch all the resources (div + vanta effect)

        return( () => {
            if(vanta)
                vanta.destroy()
                console.log("releasing resources...")
        })

    }, [vanta])

    return(
        <div className="full" ref={myRefDiv}> 
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen