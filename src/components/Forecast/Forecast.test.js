import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    { hour:10, state:"sunny", temperature:5, weekDay:"Monday"},
    { hour:9, state:"cloud", temperature:4, weekDay:"Tuesday"},
    { hour:8, state:"fog", temperature:3, weekDay:"Wednesday"},
    { hour:7, state:"cloudy", temperature:2, weekDay:"Thursday"},
    { hour:6, state:"rain", temperature:1, weekDay:"Friday"},
    { hour:5, state:"sunny", temperature:0, weekDay:"Saturday"}
]
test( "Forecast render", async () => {


    
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>)

    const forecastItems = await findAllByTestId("forecast-item-container")
    
    expect(forecastItems).toHaveLength(6)
})