import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form } from './RegisterForm.styled';
import { Input, Button } from '@components/index.js';
import { signUp } from '@redux/auth/authOperations.js';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signUp({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        required
        min={6}
        max={32}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit" content="Sign up" variant="form-btn" />

      <p>
        You don't have an account?<Link to="/login">Sign In!</Link>
      </p>
    </Form>
  );
};

export default RegisterForm;
