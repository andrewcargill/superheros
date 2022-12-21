import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Media, Card, Col } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import Asset from "../../components/Asset";
import frame from "../../styles/Containers.module.css";

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const URL = `/posts/`;
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
      <Row md={1} sm={1} xs={1} lg={3}>
        {/*SIDE CONTENT*/}
        <Col className={`${frame.Pink} order-lg-3 col-lg-3`}>SIDE BAR</Col>
        {/*MAIN CONTENT*/}
        <Col className="order-lg-1 col-lg-8">
          {/*MAIN CONTENT - SUB CONTAINER*/}
          <Container className="container-md">
            {/*post content - start*/}
            {posts.map((post) => (
              <Container className={`${frame.ContentToneBorder}`} key={post.id}>
                <Row>
                  <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${post.profile_id}`}>
                      <Avatar src={post.profile_image} height={55} />
                      {post.owner}
                    </Link>
                  </Media>
                </Row>
                <Row>
                  <Link to={`/posts/${post.id}`}>
                    <Card.Img
                      src={post.image}
                      alt={post.caption}
                      height={400}
                    />
                  </Link>
                </Row>
                <div>{post.caption}</div>
                {post.updated_at}
              </Container>
            ))}
            {/*post content - end*/}
          </Container>
        </Col>
        {/*SPACER CONTENT*/}
        <Col className={`${frame.Blue} order-lg-2 col-lg-1`}>Spacer column</Col>
      </Row>
    </div>
  );
}

export default PostsPage;
