import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  Media,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
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
            {is_owner && postPage && <MoreDropdown /> }</Container>
        </Container>
     

  );
};
export default Post;