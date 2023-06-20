import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test, beforeEach } from 'vitest'
import configureStore from 'redux-mock-store';
import ProfileList from '../components/ProfileList';

const mockStore = configureStore([]);

describe('ProfileList', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      missions: {
        missionsArr: [
          {
            id: '1',
            name: 'Mission 1',
            description: 'Description 1',
            activeMember: true,
          },
          {
            id: '2',
            name: 'Mission 2',
            description: 'Description 2',
            activeMember: false,
          },
        ],
      },
      rockets: {
        rocketsArr: [
          {
            id: '1',
            name: 'Rocket 1',
            description: 'Description 1',
            reserved: true,
          },
          {
            id: '2',
            name: 'Rocket 2',
            description: 'Description 2',
            reserved: false,
          },
        ],
      },
    });
  });

  test('renders ProfileList components with the right values', () => {
    render(
      <Provider store={store}>
        <ProfileList />
      </Provider>
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
  });
});
