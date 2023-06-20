import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest'
import configureStore from 'redux-mock-store';
import Rocket from '../components/Rocket';

const mockStore = configureStore([]);

describe('Rocket', () => {
  test('renders Rocket component with and display the right button', () => {
    let store = mockStore({});
    render(
      <Provider store={store}>
        <Rocket
          name="Rocket 2"
          description="Description 2"
          img="image.jpg"
          id="2"
          reserved={true}
        />
      </Provider>
    );
    expect(screen.getByText('Rocket 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Reserved')).toBeInTheDocument();
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });
});
