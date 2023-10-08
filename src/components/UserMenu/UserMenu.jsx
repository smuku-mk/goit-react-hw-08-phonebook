import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Button, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logout());

  return (
    <Wrapper>
      <p> Welcome, {user.name}</p>
      <Button onClick={handleLogout} type="button">
        Logout
      </Button>
    </Wrapper>
  );
};
