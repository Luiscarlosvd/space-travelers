import { it, describe, expect, vi } from 'vitest'
import { render } from '@testing-library/react';
import Mission from '../components/Mission';


vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}));

describe('Mission', () => {
  const mockName = 'Mission 1';
  const mockDesc = 'Mission description';
  const mockActiveMember = true;
  const mockId = 1;

  it('renders the component with the correct props', () => {

    const { getByText } = render(
      <Mission name={mockName} desc={mockDesc} activeMember={mockActiveMember} id={mockId} />
    );

    const nameElement = getByText(mockName);
    expect(nameElement).toBeInTheDocument();

    const descElement = getByText(mockDesc);
    expect(descElement).toBeInTheDocument();

    const buttonText = mockActiveMember ? 'Leave Mission' : 'Join Mission';
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });
});