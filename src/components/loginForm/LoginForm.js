import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../pages/login/LoginAction";

import { Spinner, Alert } from "react-bootstrap";

import "./login.style.css";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [login, setLogin] = useState(initialState);

  let { from } = location.state || { from: { pathname: "/" } };
  const { isLoading, loginResponse, isAuth } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    if (isAuth) history.replace(from);
  }, [isAuth]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      return alert("plz fill up the input fields");
    }
    dispatch(sendLogin(login));
  };

  return (
    <div className="login-style">
      {isLoading && <Spinner variant="primary" animation="border" />}

      {loginResponse?.message && (
        <Alert
          variant={loginResponse?.status === "success" ? "success" : "danger"}
        >
          {loginResponse?.message}
        </Alert>
      )}
      <Card className="p-4">
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={login.email}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleOnSubmit}>
            Log In
          </Button>

          <Form.Group>
            <Form.Text>
              <a href="">Forgotten Password?</a>
            </Form.Text>
          </Form.Group>

          <hr />

          <Button variant="success" onClick={() => history.push("/register")}>
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
