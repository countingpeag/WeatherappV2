import React from 'react'
import Forecast from './ForecastItem'

export default {
    title: "Forecast Item",
    component: Forecast
}

export const LunesSoleado = () => <Forecast weekDay={"Monday"} hour={10} state={"sunny"} temperature={23}/>