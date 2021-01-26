import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test("WeatherDetails render", async () => {

    const { findByText } = render(<WeatherDetails humidity={80} wind={10}/>);

    const wind = await findByText(/10/)

    const humidity = await findByText(/80/)

    expect(wind).toHaveTextContent("Wind: 10km/h")
    expect(humidity).toHaveTextContent("Humidity: 80%")

})