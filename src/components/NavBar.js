import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();

  const loggedInIcons = (
    <>
      <NavLink to="/" className={styles.nav}>
        Home
      </NavLink>
      <NavLink to="signin" className={styles.nav}>
        Create Post
      </NavLink>
      <NavLink to="/" className={styles.nav}>
        Sign Out
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink to="signin" className={styles.nav}>
        Sign in
      </NavLink>
      <NavLink to="signup" className={styles.nav}>
        Sign up
      </NavLink>
      <NavLink to="template" className={styles.nav}>
        Template
      </NavLink>
    </>
  );

  return (
    <Navbar expand="md" fixed="top">
      <Container>
        {currentUser && (
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
