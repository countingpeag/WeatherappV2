import React from 'react'
import { render } from "@testing-library/react";
import CityInfo from './CityInfo' // SUT: System Under Testing (component to be tested).

test("CityInfo-render", async  () => {
    //AAA
    //Arrange
    //Act
    const city = "Buenos Aires";
    const country = "Argentina";
    // - Render: Renderiza el componente y retorna una serie de funciones de utilidadm por ejemplo (findAllByRole)
    // - para consultar a nuestro componente vamos a analizar su extado en el assert
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)
    
    //Assert
    // - findAllByRole nos va encontrar nos va buscar  todos los componentes que sean "heading" (H1, H2, H3...)
    // - El resultado es un array de componentes (cityAndCountryComponent).
    const cityAndCountryComponent = await findAllByRole("heading")

    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)


});