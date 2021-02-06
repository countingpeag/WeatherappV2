import React from 'react'
import { useHistory } from 'react-router-dom'

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        //history push allows change the URL by programming
        history.push("/city")

    }

    return (
        <div>
            <button onClick={onClickHandler}>Go to CityPage</button>
        </div>
    )
}

export default MainPage