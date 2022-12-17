import React from "react";
import styles from "../App.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import {
  Card,
  Media,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";

const John = (props) => {
  const {
    caption,
    id,
    owner,
    profile_id,
    profile_image,
    image,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Container>
          <Row>
            <Media className="align-items-center justify-content-between">
              <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
                {owner}
              </Link>
            </Media>
          </Row>
          <Row>
            <Link to={`/posts/${id}`}>
              <Card.Img src={image} alt={caption} />
            </Link>
          </Row>
          <div>{caption}</div>
          {updated_at}
          {/* is current user the owner? */}
          <Container>
            Is Current User Owner? 
            {is_owner && postPage && "YES"}</Container>
        </Container>
      </Card.Body>
    </Card>
  );
};
export default john;
