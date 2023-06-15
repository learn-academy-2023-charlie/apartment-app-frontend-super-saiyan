import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ApartmentProtectedIndex from '../pages/ApartmentProtectedIndex';
import AptMock from '../AptMock';

describe('<ApartmentProtectedIndex />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <ApartmentProtectedIndex apartments={AptMock} />
      </BrowserRouter>
    );
  });

  it('shows an apartment card', () => {
    render(
      <BrowserRouter>
        <ApartmentProtectedIndex apartments={AptMock} />
      </BrowserRouter>
    );

    AptMock.forEach(apartment => {
      const cardTitles = screen.getAllByText(apartment.street);
      const foundTitle = cardTitles.find(title => title instanceof HTMLElement);
      expect(foundTitle).toBeInTheDocument();
    });
  });

  it('changes slides when next and previous buttons are clicked', () => {
    render(
      <BrowserRouter>
        <ApartmentProtectedIndex apartments={AptMock} />
      </BrowserRouter>
    );

    // Initially, the first slide should be active
    const firstSlide = screen.getByTestId('carousel-slide-0');
    expect(firstSlide).toHaveClass('active');

    // Click the next button
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    // The second slide should now be active
    const secondSlide = screen.getByTestId('carousel-slide-1');
    expect(secondSlide).toHaveClass('active');

    // Click the previous button
    const previousButton = screen.getAllByText('Previous');
    fireEvent.click(previousButton);

    // The first slide should be active again
    expect(firstSlide).toHaveClass('active');
  });
});
