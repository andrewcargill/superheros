import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink to="/" className={styles.nav}>
              Home
            </NavLink>
            <NavLink to="signin" className={styles.nav}>
              Sign in
            </NavLink>
            <NavLink to="signup" className={styles.nav}>
              Sign up
            </NavLink>
            <NavLink to="template" className={styles.nav}>
              Template
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;