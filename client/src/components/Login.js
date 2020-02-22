import React, { useState} from "react";

import axiosWithAuth from '../utils/axiosWithAuth';

import { Form, Button } from 'react-bootstrap'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser ({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.prevetnDefault();
    axiosWithAuth()
    .post('/login', user)
    .then( res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubbles');
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <Form onSubmit={login}>
        <Form.Group controlId='formBasicUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control 
          type='username'
          name='username'
          value={user.username}
          onChange={handleChange} 
          placeholder='Enter username' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange} 
          placeholder='Enter password' />
        </Form.Group>
        <Button variant='primary' type='submit'>Login</Button>
      </Form>
    </>
  );
};

export default Login;
