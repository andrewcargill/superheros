import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Asset from "../../components/Asset";
import frame from "../../styles/Containers.module.css";
import appStyles from "../../App.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import ProfileSearch from "../../components/ProfileSearch";
import postsStyles from "../../styles/Posts.module.css";

function PostsPage() {
  const [posts, setPosts] = useState({ results: [] });

  useEffect(() => {
    async function fetchPosts() {
      const URL = `/posts/`;
      try {
        const res = await axios.get(URL);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <Row md={1} sm={1} xs={1} lg={3}>
        {/*SIDE CONTENT*/}
        <Col
          className={`
          ${frame.Black_}  
          ${frame.SideContainer}  
          d-xl-block order-lg-3 col-lg-3`}
        >
          <ProfileSearch />
        </Col>
        {/*MAIN CONTENT*/}
        <Col className="order-lg-1 col-lg-8">
          {/*MAIN CONTENT - SUB CONTAINER*/}
          <h2 className={`${appStyles.ComicText} text-center`}>
            The latest Hero posts!!
          </h2>
          <Container className={` ${frame.FixedHeight} container-md`}>
            {posts.results.length ? (
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <div key={`${post.id}`}>
                    <Container className={postsStyles.Shake}>
                      <div className="justify-content-center">
                        <Link to={`/profiles/${post.profile_id}`}>
                          <h1 className={`text-center ${appStyles.HeroText}`}>
                            {" "}
                            {post.owner}
                          </h1>
                        </Link>
                      </div>
                    </Container>
                    <Container
                      className={`${frame.ContentToneBorder} ${frame.Posts}`}
                    >
                      <Row className="justify-content-center">
                        <Link to={`/posts/${post.id}`}>
                          <Card.Img
                            className={frame.ImageContainer}
                            src={post.image}
                            alt={post.caption}
                          />
                        </Link>
                      </Row>
                      <div>
                        <p className={appStyles.ComicText}> {post.caption}</p>
                      </div>
                      <div className="text-right">
                        <p>{post.updated_at}</p>
                      </div>
                    </Container>
                  </div>
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Asset spinner />
            )}
          </Container>
        </Col>
        {/*SPACER CONTENT*/}
        <Col className="order-lg-2 col-lg-1"></Col>
      </Row>
    </div>
  );
}

export default PostsPage;
