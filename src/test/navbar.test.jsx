import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest'
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders Navbar component without errors', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);

    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
  test('should have the correct href attribute for each link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const rocketsLink = getByText('Rockets');
    const missionsLink = getByText('Missions');
    const myProfileLink = getByText('My Profile');

    expect(rocketsLink).toHaveAttribute('href', '/');
    expect(missionsLink).toHaveAttribute('href', '/missions');
    expect(myProfileLink).toHaveAttribute('href', '/my-profile');
  });
});
