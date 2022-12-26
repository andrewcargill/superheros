import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";
import frame from "../../styles/Containers.module.css";
import appStyles from "../../App.module.css";

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
    <div>
      <Container>
        <div className="justify-content-center">
          <Link to={`/profiles/${profile_id}`}>
            <h1 className={`text-center ${appStyles.HeroText}`}> {owner}</h1>
          </Link>
        </div>
      </Container>
      <Container className={`${frame.ContentToneBorder}`}>
      
        <Row className="justify-content-center">
          <Link to={`/posts/${id}`}>
            <Card.Img
              className={frame.ImageContainer}
              src={image}
              alt={caption}
            />
          </Link>
        </Row>
        <div>
          <p className={appStyles.ComicText}> {caption}</p>
        </div>
        <div className="text-right">
          <p>{updated_at}</p>
        </div>

        <Container>
          <Row>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default Post;
