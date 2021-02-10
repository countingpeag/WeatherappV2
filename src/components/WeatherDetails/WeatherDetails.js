import React from 'react'
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const WeatherDetails = ({ humidity, wind }) => {

    return (
        <Grid container item xm={12} justify="center">
            <Typography>Humidity: {humidity}%</Typography>
            <Typography>Wind: {wind}km/h</Typography>
        </Grid>
    );
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDetails