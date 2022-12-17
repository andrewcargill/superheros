import React from "react";
import logo from "../assets/logo.png";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const LandingPage = () => {
  const currentUser = useCurrentUser();

  const loggedOutLanding = (
    <div>
      <img src={logo} alt="logo" height="100" />
    </div>
  );

  const loggedInLanding = (
    <div>
      <h1>Logged in</h1>
    </div>
  );

  return (
    // Shows logo is user is not logged in

    <div>{currentUser ? loggedInLanding : loggedOutLanding}</div>
  );
};

export default LandingPage;
