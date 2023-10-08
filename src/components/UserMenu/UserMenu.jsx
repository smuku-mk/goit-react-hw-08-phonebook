import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logout());

  return (
    <Wrapper>
      <p> Welcome, {user.name}</p>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </Wrapper>
  );
};
