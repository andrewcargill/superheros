import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Media, Form } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { Link } from "react-router-dom";
import styles from "../../styles/SearchPowers.module.css";

function PowersSearch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const URL = `/powers/`;
      try {
        const res = await axios.get(URL);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, []);

  if (!posts.length) return <h3>Loading...</h3>;

  return (
    <div>
      <div className={appStyles.Terminal}>
        <h5>latest hero stats:</h5>

        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="number"
            name="speed"
            max="5"
            value=""
            onChange=""
          />
        </Form.Group>

        <div className={styles.ResultsScroll}>
          {posts.map((post) => (
            <Container key={post.id}>
              <Row>
                <Media className="align-items-center justify-content-between">
                  <Link to={`/powers/${post.id}`}>{post.owner}</Link>
                </Media>
              </Row>
              <Row>
                <Container>
                  <div>Speed: {post.speed}</div>
                </Container>
                <Container>
                  <div>flight: {post.flight}</div>
                </Container>
                <Container>
                  <div>strength: {post.strength}</div>
                </Container>
                <Container>
                  <div>vision: {post.vision}</div>
                </Container>
                <Container>
                  <div>fire: {post.fire}</div>
                </Container>
                <Container>
                  <div>lasers: {post.lasers}</div>
                </Container>
              </Row>
            </Container>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PowersSearch;
