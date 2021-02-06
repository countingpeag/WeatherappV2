import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList/CityList'

const cities  = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Guadalajara", country: "Mexico"},
    {city: "Madrid", country: "España"}
] 

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        //history push allows change the URL by programming
        history.push("/city")

    }

    return (
        <div>
            <h2>City List</h2>
            <CityList onClick={onClickHandler} cities={cities}/>
        </div>
    )
}

export default MainPage