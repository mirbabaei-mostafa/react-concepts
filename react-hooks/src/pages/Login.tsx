import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const userRef = useRef<string>();
  const passRef = useRef<string>();
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>User name</Form.Label>
        <Form.Control type="email" placeholder="mostafa" ref={userRef} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passRef} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
