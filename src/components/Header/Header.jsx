import { AuthNav, MainNav, HeaderStyle, StyledLink } from './Header.styled';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyle>
      <MainNav>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </MainNav>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <AuthNav>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </AuthNav>
      )}
    </HeaderStyle>
  );
};
