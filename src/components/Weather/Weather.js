import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IconContext} from 'react-icons'
import IconState, {validValues} from './../IconState'

const Weather = ({temperature, state}) => {
    return (
        <Grid container item direction="row" alignItems="center" justify="center" spacing={1}>
            <IconContext.Provider value={{ size: '5em'}}>
                <IconState state={state}/>
            </IconContext.Provider>
            <Typography variant="h3" >{temperature}</Typography>
        </Grid>
    );
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather;