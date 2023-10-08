import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Username
        <input type="text" name="name" required />
      </Label>
      <Label>
        Email
        <input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <input type="password" name="password" minLength="8" required />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
