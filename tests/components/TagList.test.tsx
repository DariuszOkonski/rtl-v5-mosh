import { render, screen, waitFor } from '@testing-library/react';
import TagList from '../../src/components/TagList';

describe('TagList', () => {
  it('should render tags', async () => {
    render(<TagList />);

    await waitFor(() => {
      const listItem = screen.getAllByRole('listitem');
      expect(listItem.length).toBeGreaterThan(0);
    });

    // second option with findBy
    const listItems2 = await screen.findAllByRole('listitem');
    expect(listItems2.length).toBeGreaterThan(0);
  });
});
