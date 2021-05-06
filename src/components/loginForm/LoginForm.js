import React from "react";
import { Form, Button, Card } from "react-bootstrap";

import "./login.style.css";
const LoginForm = () => {
  return (
    <div className="login-style">
      <Card className="p-4">
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Log In
          </Button>

          <Form.Group>
            <Form.Text>
              <a href="">Forgetten Password?</a>
            </Form.Text>
          </Form.Group>

          <hr />

          <Button variant="success">Register</Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
