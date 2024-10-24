import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

const myVersionUser: User = {
  id: 1,
  name: 'Darek',
  isAdmin: true,
};

describe('UserAccount MyVersion', () => {
  it('should render user name', () => {
    render(<UserAccount user={myVersionUser} />);

    const userName = screen.getByText(/darek/i);
    expect(userName).toBeInTheDocument();
  });

  it('should render button if user is Admin', () => {
    render(<UserAccount user={myVersionUser} />);

    const buttonEdit = screen.getByRole('button', { name: /edit/i });
    expect(buttonEdit).toBeInTheDocument();
  });

  it('should not render button if user is not Admin', () => {
    myVersionUser.isAdmin = false;
    render(<UserAccount user={myVersionUser} />);

    const buttonEdit = screen.queryByRole('button', { name: /edit/i });
    expect(buttonEdit).not.toBeInTheDocument();
  });
});

describe('UserAccount MoshVersion', () => {
  it('should render user name', () => {
    const user: User = { id: 1, name: 'Mosh' };
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it('should render edit button if user is admin', () => {
    const user: User = { id: 1, name: 'Mosh', isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it('should not render edit button if user is not admin', () => {
    const user: User = { id: 1, name: 'Mosh' };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
});
