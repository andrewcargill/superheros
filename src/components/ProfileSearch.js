import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";
import { useLocation } from "react-router";
import styles from "../styles/SearchPowers.module.css";
import appStyles from "../App.module.css";

function ProfileSearch({ filter = "" }) {
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(
          `/profiles/?${filter}search=${query}`
        );
        setProfiles(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchProfiles();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <div className={`container-md text-center`}>
      <Form
        className={styles.Header}
        onSubmit={(event) => event.preventDefault()}
      >
        <Form.Control
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          className="mr-sm-2 text-center"
          placeholder="Hero Search"
        />
      </Form>

      <div className={styles.ResultsScroll}>
        {hasLoaded ? (
          profiles.results.map((profile) => (
            <Container key={profile.id}>
              <Link to={`/profiles/${profile.id}`}>
                <span className={appStyles.InfoText}>{profile.owner}</span>
              </Link>
            </Container>
          ))
        ) : (
          <div>LOADING...</div>
        )}
      </div>
    </div>
  );
}

export default ProfileSearch;
