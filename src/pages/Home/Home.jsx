import { Helmet } from 'react-helmet';
import { Wrapper, Title } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Wrapper>
        <Title>Welcome to Phonebook!</Title>
        <p>Log in or create a new account to enjoy using the application.</p>
      </Wrapper>
    </>
  );
};
