import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchComponent } from './SearchComponent'; // Adjust the import path if needed

describe('SearchComponent', () => {
  it('renders the search input with the correct label', () => {
    render(<SearchComponent onSearch={jest.fn()} />);

    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  });

  it('calls the onSearch callback with the correct query when typing', () => {
    const mockOnSearch = jest.fn();
    render(<SearchComponent onSearch={mockOnSearch} />);

    const input = screen.getByLabelText(/search/i);
    fireEvent.change(input, { target: { value: 'Test Query' } });

    expect(mockOnSearch).toHaveBeenCalledWith('test query');
  });
});
