// components/shared/WineCard/WineCard.test.tsx

import { render, screen } from '@testing-library/react';
import WineCard from './WineCard';

const mockWine = {
  id: 'cl123xyz',
  name: 'Catena Zapata Malbec Argentino',
  winery: 'Catena Zapata',
  year: 2021,
  imageUrl: '/images/wines/catena-malbec.png',
  price: 95.5,
};

describe('WineCard', () => {
  it('should render the wine name, winery, and price', () => {
    render(<WineCard wine={mockWine} />);

    const nameElement = screen.getByRole('heading', {
      name: /catena zapata malbec argentino/i,
    });

    // LA CORRECCIÓN CLAVE: Búsqueda exacta para la bodega.
    const wineryElement = screen.getByText(/^Catena Zapata$/i);
    const priceElement = screen.getByText(/\$95.50/i);

    expect(nameElement).toBeInTheDocument();
    expect(wineryElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});