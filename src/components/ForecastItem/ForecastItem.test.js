import React from 'react'
import { render } from '@testing-library/react'
import ForeCastItem from './ForecastItem'

test("ForecastItem render", async () => {

    const { findByText } = render(<ForeCastItem weekDay={"Monday"} hour={10} state={"rain"} temperature={18} />)

    const weekDay = await findByText(/Monday/)
    const hour = await findByText(/10/)
    const temperature = await findByText(/18/)

    expect(weekDay).toHaveTextContent("Monday")
    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("18°")

})