import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import frame from "../../styles/Containers.module.css";
import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row md={1} sm={1} xs={1} lg={3}>
      {/*SIDE CONTENT*/}
      <Col className={`${frame.Pink} order-lg-3 col-lg-3`}>SIDE BAR</Col>
      {/*MAIN CONTENT*/}
      <Col className="order-lg-1 col-lg-8">
        <Container className={`${frame.ContentToneBorder} container-md`}>
          <h4 className={`${appStyles.ComicText} text-center text-uppercase`}>
            Welcome back... it's time to sign in!
          </h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Hero Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Hero Name"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button variant="primary" type="submit">
              Sign In
            </Button>

            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>

          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signin">
              Already have an account? <span>Sign in here!</span>
            </Link>
          </Container>
        </Container>
      </Col>

      {/*SPACER CONTENT*/}
      <Col className={`${frame.Blue} order-lg-2 col-lg-1`}>Spacer column</Col>
    </Row>
  );
};

export default SignInForm;
