import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForeCastItem from './../ForecastItem'

const renderForecastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast
    return(
        <Grid item key={`${weekDay}${hour}`}>
            <ForeCastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature} />
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
    return(
        <Grid constainer justify="center" alignItems="center">
            {
                forecastItemList.map( forecast => renderForecastItem(forecast) )
            }
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.array.isRequired
}

export default Forecast;