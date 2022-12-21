import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Media, Card, Col } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import Asset from "../../components/Asset";
import frame from "../../styles/Containers.module.css";
import appStyles from "../../App.module.css";
import PowersSearch from "../powers/PowersSearch";

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
        <Col className={`${frame.Black}  ${frame.SideContainer} order-lg-3 col-lg-3`}>
          <PowersSearch />
        </Col>
        {/*MAIN CONTENT*/}
        <Col className="order-lg-1 col-lg-8">
          {/*MAIN CONTENT - SUB CONTAINER*/}
          <Container className={` ${frame.FixedHeight} container-md`} >
            {/*post content - start*/}
            {posts.map((post) => (
              <div>
                <Row xs={1} sm={2}>
                  <Col className="col-8">
                  <Link to={`/profiles/${post.profile_id}`}>
                <h1 className={appStyles.HeroText}>{post.owner}</h1>
                </Link>
                </Col>
                <Col>
                <p>{post.updated_at}</p>
                </Col>

                </Row>
                <Container className={`${frame.PostContainer}`} key={post.id}>
                  <Row>
                    {/* <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${post.profile_id}`}>
                      <Avatar src={post.profile_image} height={55} />
                       
                    </Link>
                    <h3 className={appStyles.HeroText}>{post.owner}</h3>
                  </Media> */}
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
                
                   
                  <div className={frame.WrapText}>{post.caption}</div>
                 
                </Container>
              </div>
            ))}
            {/*post content - end*/}
          </Container>
        </Col>
        {/*SPACER CONTENT*/}
        <Col className="order-lg-2 col-lg-1"></Col>
      </Row>
    </div>
  );
}

export default PostsPage;
