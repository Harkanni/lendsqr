import React from 'react';
import { render, screen } from '@testing-library/react';
import UserSummary from './UserlistSummary';
import '@testing-library/jest-dom';

// Mock icons to avoid issues with importing assets during tests
jest.mock('../../../assets', () => ({
  dbIcon: 'dbIcon.png',
  documentIcon: 'documentIcon.png',
  doubleUserIcon: 'doubleUserIcon.png',
  trippleUserIcon: 'trippleUserIcon.png'
}));

describe('UserSummary Component', () => {
  it('renders the UserSummary component', () => {
    render(<UserSummary />);

    // Check if the component title is rendered
    expect(screen.getByTestId('user-summary')).toBeInTheDocument();
  });
});
