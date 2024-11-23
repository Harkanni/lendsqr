// Loading.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
  it('renders the Loading component with correct props', () => {
    const type = 'spin';
    const color = '#000000';

    // Render the component
    render(<Loading type={type} color={color} />)

    // Check if the container is rendered
    const container = screen.getByTestId('loading-container');
    expect(container).toBeInTheDocument();

    // Check if the ReactLoading component is rendered
    const loadingElement = container.querySelector('svg');
    expect(loadingElement).toBeTruthy(); // ReactLoading renders an SVG
  });
});
