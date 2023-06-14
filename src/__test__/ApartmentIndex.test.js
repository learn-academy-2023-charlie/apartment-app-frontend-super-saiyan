import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ApartmentIndex from '../pages/ApartmentIndex';
import AptMock from '../AptMock'


describe("<ApartmentIndex />", () => {
    it ("Shows a listing for pets", () => {
     render (
      <BrowserRouter>
        <ApartmentIndex apartments={AptMock}/>
      </BrowserRouter>
     )
      expect(screen.getByText("San Diego")).toBeInDocument()
    })

     })
  