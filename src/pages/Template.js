import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Containers.module.css";
import font from "../App.module.css";
import button from "../styles/Button.module.css";

const Template = () => {
  return (
    //  <Container className={styles.Green}>
    <Row md={1} sm={1} xs={1} lg={3}>
      <Col className={`${styles.Pink} order-lg-3 col-lg-3`}>Side column</Col>
      {/*MAIN CONTENT*/}
      <Col className="order-lg-1 col-lg-8">
        Main Content
        <Container className={`${styles.ContentToneBorder} container-md`}>
          
        </Container>
        <div className="element-padding">
          {/* <!--already have an account-help text--> */}
          <div className="content-container-white-thin-border">
            <div className="container">
              <div className="row justify-content-center">
                <h6 className="text-line">
                  <p className={font.ComicText}></p> You have an account?
                  <a href="url" class="red-text">
                    Sign in here!
                    <Button className={button.Button}>Hello</Button>
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
