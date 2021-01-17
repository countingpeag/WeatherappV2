import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList'

const cities  = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Guadalajara", country: "Mexico"},
    {city: "Bogota", country: "España"}
] 

test("CityList renders", async () => {
    //AAA Arrage, Act, Asser

    const { findAllByRole } = render(<CityList cities={cities} />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(3)
})