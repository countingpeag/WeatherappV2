/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Forecast from './ForecastItem'

export default {
    title: "Forecast Item",
    component: Forecast
}

export const LunesSoleado = () => <Forecast weekDay={"Monday"} hour={10} state={"sunny"} temperature={23}/>