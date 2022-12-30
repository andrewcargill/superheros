import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { EditDropdown } from "../../components/EditDropdown";
import appStyles from "../../App.module.css";
import frame from "../../styles/Containers.module.css";

const Profile = (props) => {
  const { bio, id, owner, image, created_at, profilePage } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/profiles/${id}/edit`);
  };

  return (
    <Container className={`${frame.ContentToneBorder}`}>

      <div className="justify-content-center">
        <h1 className={`text-center ${appStyles.HeroText}`}> {owner}</h1>
      </div>
      <Row className="justify-content-center">
        <Card.Img
          className={frame.ImageContainer}
          src={image}
          alt="profile picture"
        />
      </Row>
      <div>
        <p className={appStyles.ComicText}> {bio}</p>
      </div>
      <div>
        <p className="text-center text-uppercase"> joined  {created_at} </p>
      </div>
      <Container>
        <Row>
        {is_owner && profilePage && <EditDropdown handleEdit={handleEdit} />}
        </Row>
      </Container>
    </Container>
  );
};
export default Profile;
