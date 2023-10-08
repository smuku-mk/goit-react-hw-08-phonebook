import { LoginForm } from '../../components';
import { Helmet } from 'react-helmet';

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm/>
    </div>
  );
};
