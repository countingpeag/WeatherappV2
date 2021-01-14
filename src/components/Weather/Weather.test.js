import React from  'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render", async () => {
    //AAA arrange, Act, Assert
    const  { findByRole } = render(<Weather temperature={10} />);
    
    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("10");
})