import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, beforeEach, describe, expect, vi, test } from 'vitest';
import configureStore from 'redux-mock-store';
import RocketsList from '../components/RocketsList';

const mockStore = configureStore([]);

describe('RocketsList', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      rockets: {
        rocketsArr: [
          {
            id: '1',
            name: 'Rocket 1',
            description: 'Description 1',
            img: 'image.jpg',
            reserved: true,
          },
          {
            id: '2',
            name: 'Rocket 2',
            description: 'Description 2',
            img: 'image.jpg',
            reserved: false,
          },
        ],
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders RocketsList component without errors', () => {
    render(
      <Provider store={store}>
        <RocketsList />
      </Provider>
    );

    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Rocket 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });
});