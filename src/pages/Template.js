import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../styles/Containers.module.css";
import font from "../App.module.css";
import button from "../styles/Button.module.css";

const Template = () => {
  return (
    //  <Container className={styles.Green}>
    <Row md={1} sm={1} xs={1} lg={3}>
      {/*SIDE CONTENT*/}
      <Col className={`${styles.Pink} order-lg-3 col-lg-3`}>Side column</Col>
      {/*MAIN CONTENT*/}
      <Col className="order-lg-1 col-lg-8">
        Main Content
        <Container className={`${styles.ContentToneBorder} container-md`}>
          <h4 class={`${font.ComicText} text-center text-uppercase`}>
            are you a superhero? sign up now!!
          </h4>

          <Form action="">
            {/* <!--Username--> */}
            <Row className="justify-content-center">
              Username
              {/* <input type="text" class="centered-input info-text text-center" placeholder="Username"> */}
            </Row>
            {/* <!--Password--> */}
            <Row className="justify-content-center">
              Password
              {/* <input type="text" class="middle-input info-text text-center" placeholder="Password"> */}
            </Row>
            {/* <!--Confirm password--> */}
            <Row className="justify-content-center">
              Password
              {/* <input type="text" class="centered-input info-text text-center" */}
              {/* placeholder="Confirm password"> */}
            </Row>
            <Row className="d-flex justify-content-center">
              <Button className={button.Button}>Sign Up</Button>
      
              {/* <button type="button" class="super-long-button">Sign up</button> */}
            </Row>
          </Form>
        </Container>
        <div className="element-padding">
          {/* <!--already have an account-help text--> */}
          <div className="content-container-white-thin-border">
            <div className="container">
              <div className="row justify-content-center">
                <h6 className="text-line">
                  You have an account?
                  <a href="url" class="red-text">
                    Sign in here!
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/*SPACER*/}
      <Col className={`${styles.Blue} order-lg-2 col-lg-1`}>Spacer column</Col>
    </Row>
    //  </Container>
  );
};

export default Template;
