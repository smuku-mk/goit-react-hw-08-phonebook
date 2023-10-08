import { RegisterForm } from '../../components';
import { Helmet } from 'react-helmet';

export const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};
