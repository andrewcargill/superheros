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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";

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
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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
            {is_owner && postPage && <MoreDropdown
             handleEdit={handleEdit} 
             handleDelete={handleDelete}
             /> }
        </Container>
        </Container>
     

  );
};
export default Post;