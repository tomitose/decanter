// jest.setup.tsx
import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, ...props }: React.ComponentProps<'img'> & { fill?: boolean }) => {
    // Ignoramos "fill" porque <img> no lo soporta
    return <img {...props} alt={props.alt || ''} />;
  },
}));
