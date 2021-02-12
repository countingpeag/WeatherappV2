import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
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
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage