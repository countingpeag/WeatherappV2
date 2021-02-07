import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/cityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const forecastItemListExample = [
    { hour:10, state:"sunny", temperature:5, weekDay:"Monday"},
    { hour:9, state:"cloud", temperature:4, weekDay:"Tuesday"},
    { hour:8, state:"fog", temperature:3, weekDay:"Wednesday"},
    { hour:7, state:"cloudy", temperature:2, weekDay:"Thursday"},
    { hour:6, state:"rain", temperature:1, weekDay:"Friday"},
    { hour:5, state:"sunny", temperature:0, weekDay:"Saturday"}
]


const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19
    }
]

const CityPage = () => {
    const city = "Buenos aires"
    const country = "Argentina"
    const state = "cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data=dataExample
    const forecastItemList = forecastItemListExample

    return(
        <Grid container justify={"center"} direction={"column"} >
            <Grid item xm={12}>
                <CityInfo city={city} countrey={country} />
            </Grid>
            <Grid constainer item xm={12}>
                <Grid item xm={8}>
                    <Weather state={state} temperature={temperature}/>
                </Grid>
                <Grid item xm={4}>
                    <WeatherDetails humidity={humidity} wind={wind}/>
                </Grid>
            </Grid>
            <Grid item xm={12}>
                <ForecastChart data={data}/>
            </Grid>
            <Grid item xm={12}>
                <Forecast forecastItemList={forecastItemList}/>
            </Grid>
        </Grid>
    )
}

export default CityPage