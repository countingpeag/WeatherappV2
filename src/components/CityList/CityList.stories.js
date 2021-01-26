import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities  = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Guadalajara", country: "Mexico"}
] 

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click in city")}/>