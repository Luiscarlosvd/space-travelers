import { render, screen } from "@testing-library/react";
import MissionsList from "../components/MissionsList";
import { afterEach, beforeEach, describe, expect,vi } from 'vitest'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe("MissionsList", () => {
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
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renders mission list correctly", () => {
    render(<Provider store={store}><MissionsList /></Provider>);

    expect(screen.getByText("Mission 1")).toBeInTheDocument();
    expect(screen.getByText("Mission 2")).toBeInTheDocument();

    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();


    expect(screen.getByText("Active Member")).toBeInTheDocument();
    expect(screen.getByText("Not a member")).toBeInTheDocument();
  });
});
