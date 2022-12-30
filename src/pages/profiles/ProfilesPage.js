import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Media, Card } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";

function ProfilesPage() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function fetchPosts() {
      const URL = `/profiles/`;
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
      <div>
        {posts.map((post) => (
          <Container key={post.id}>
            <Row>
              <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${post.profile_id}`}>
                  <Avatar src={post.image} height={55} />
                  {post.owner}
                </Link>
              </Media>
            </Row>
            <Row>
              <Link to={`/profiles/${post.id}`}>
                <Card.Img src={post.image} alt="profile image" height={400} />
              </Link>
            </Row>
            <div>PROFILE BIO: {post.bio}</div>
            <div>PROFILE CREATION DATE: {post.created_at}</div>    
            {post.updated_at}
          </Container>
        ))}
      </div>
    </div>
  );
}

export default ProfilesPage;
