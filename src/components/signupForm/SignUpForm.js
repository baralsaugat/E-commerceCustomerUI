import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Spinner, Alert } from "react-bootstrap";
import "./signUp.style.css";
import { Form, Button, Col, Card } from "react-bootstrap";

import { addAllUsers } from "../../pages/signUp/SignUpAction";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(initialState);

  const { isLoading, status, message, signUpList } = useSelector(
    (state) => state.signup
  );

  console.log(signUp);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setSignUp({ ...signUp, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addAllUsers(signUp));
  };

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border" />}

      {message && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Card className="signupForm-style">
        <Form className="p-4">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="fName"
                type="string"
                value={signUp.fName}
                onChange={handleOnChange}
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lName"
                value={signUp.lName}
                type="String"
                placeholder="Enter Last Name"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={signUp.email}
                type="email"
                placeholder="Enter email"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={signUp.password}
                type="password"
                placeholder="Password"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" onClick={handleOnSubmit}>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default SignUpForm;
