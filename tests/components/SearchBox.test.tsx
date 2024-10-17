import { render, screen } from '@testing-library/react';
import SearchBox from '../../src/components/SearchBox';
import userEvent from '@testing-library/user-event';

describe('SearchBox', () => {
  const renderSearchBox = () => {
    render(<SearchBox onChange={vi.fn()} />);

    return {
      input: screen.getByPlaceholderText(/search/i),
    };
  };

  it('should render an input field for searching', () => {
    const { input } = renderSearchBox();
    expect(input).toBeInTheDocument();
  });
});
