import { Helmet } from 'react-helmet';
import { Wrapper, Title } from './Home.styled';
import { useAuth } from 'hooks';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Wrapper>
        <Title>Welcome to Phonebook!</Title>
        {isLoggedIn ? (
          <p>You can add some contacts.</p>
        ) : (
          <p>Log in or create a new account to enjoy using the application.</p>
        )}
      </Wrapper>
    </>
  );
};
