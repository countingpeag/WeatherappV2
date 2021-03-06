import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../cityInfo'
import Weather from './../Weather'

//renderCityAndCountry se va convertir en una funcion que retorna otra funcion
const renderCityAndCountry = onClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry;

    return (
        <ListItem button key={city} onClick={onClickCity}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather temperature={10} state="sunny"/>
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({  cities, onClickCity }) => {
    return(
        <List>
            {
                cities.map( cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </List>
    );
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList;