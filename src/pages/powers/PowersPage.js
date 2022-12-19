import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Media } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";



function PowersPage() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function fetchPosts() {
      const URL = `/powers/`;
      try {
        const res = await axios.get(URL);
        console.log(res.data);
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
      <div>
        {posts.map((post) => (
          <Container key={post.id}>
            <Row>
              <Media className="align-items-center justify-content-between">
                <Link to={`/powers/${post.id}`}>
                  <Avatar src={post.profile_image} height={55} />
                  {post.owner}
                </Link>
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
  );
}

export default PowersPage;
