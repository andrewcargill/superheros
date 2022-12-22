import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const [expanded, setExpanded] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)){
        setExpanded(false) 
      }
    }

    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref] )


  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInIcons = (
    <>
      <NavLink to="/" className={styles.nav}>
        Home
      </NavLink>
      <NavLink className={styles.nav} to="/" onClick={handleSignOut}>
        Sign Out
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>

    </>
  );

  return (
    <Navbar expanded={expanded} expand="md" fixed="top">
      <Container className={styles.Container}>
        {currentUser && (
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
        )}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink to="/profiles" className={styles.nav}>
              Profiles
            </NavLink>
            <NavLink to="/powers" className={styles.nav}>
              Powers
            </NavLink>
            <NavLink to="/posts" className={styles.nav}>
              Posts
            </NavLink>
            <NavLink to="/posts/create" className={styles.nav}>
              + Post
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
