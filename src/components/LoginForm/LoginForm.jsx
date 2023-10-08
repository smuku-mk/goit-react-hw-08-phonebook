import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Button, Form, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { email, password } = form.elements;
    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <input type="password" name="password" minLength="8" required />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};
