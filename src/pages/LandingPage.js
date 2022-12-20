import React from "react";
import logo from "../assets/logo.png";
import PostCreateForm from "../components/PostCreateForm";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Container, Row, Button } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";
import { Link } from "react-router-dom";
import appStyles from "../App.module.css";
import frame from "../styles/Containers.module.css";
import styles from "../styles/Landing.module.css";

const LandingPage = () => {
  const currentUser = useCurrentUser();

  const loggedOutLanding = (
    <div className={styles.Styles}>
      <Row>
        <Container className="container-md">
        <Container
          className={`${frame.ContainerBlackBorder} container-md justify-content-center`}
        >
          <div className="text-center">
          <h5 className={appStyles.Terminal}>
            World Government Agency - Hero Chat
          </h5>
          </div>
          <Row className="justify-content-center">
            <div>
            <img src={logo} alt="logo" height="150" />
            </div>
          </Row>
          <Row className="justify-content-center">
          <div className="text-center">
          <h5 className={appStyles.Terminal}>
            A safe place for superheros to socialize
          </h5>
          </div>
          </Row>
          <Row className="justify-content-center">
          
            <div>
            <Link to="/signin">
              <Button className={`${btnStyles.ButtonWhite} ${appStyles.Terminal} btn text-uppercase`}>Sign in</Button>
            </Link>
            </div>
          </Row>
        </Container>
        </Container>
      </Row>
    </div>
  );

  const loggedInLanding = (
    <div>
      <Container>
        <h1>Logged in</h1>
        <PostCreateForm />
      </Container>
    </div>
  );

  return (
    // Shows logo is user is not logged in

    <div>{currentUser ? loggedInLanding : loggedOutLanding}</div>
  );
};

export default LandingPage;
