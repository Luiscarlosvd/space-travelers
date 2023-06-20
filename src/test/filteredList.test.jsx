import { render } from '@testing-library/react';
import FilteredList from '../components/FilteredList';

describe('FilteredList', () => {
  const mockArray = [
    { id: 1, name: 'Mission 1' },
    { id: 2, name: 'Mission 2' },
    { id: 3, name: 'Mission 3' },
  ];
  const mockTitle = 'Missions List';

  test('renders the component with the correct title and items', () => {
    const { getByText } = render(<FilteredList array={mockArray} title={mockTitle} />);

    const titleElement = getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();

    mockArray.forEach((item) => {
      const itemElement = getByText(item.name);
      expect(itemElement).toBeInTheDocument();
    });
  });
});