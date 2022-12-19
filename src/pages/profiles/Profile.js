import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  Media,
  Container,
  Row,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";
import { EditDropdown } from "../../components/EditDropdown";

const Profile = (props) => {
  const {
    bio,
    id,
    owner,
    image,
    updated_at,
    profilePage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  console.log('------------andy Line 28 is_owner', is_owner);
  
  const handleEdit = () => {
    history.push(`/profiles/${id}/edit`);
  };

  return (

        <Container>
          <Row>
            <Media className="align-items-center justify-content-between">
              <Link to={`/profiles/${id}`}>
                <Avatar src={image} height={55} />
                {owner}
              </Link>
            </Media>
          </Row>
          <Row>
            
              <Card.Img src={image} alt="profile picture" />
            
          </Row>
          <div>{bio}</div>
          {updated_at}
          {/* is current user the owner? */}
          <Container>
            Is Current User Owner? 
            {is_owner && profilePage && <EditDropdown
             handleEdit={handleEdit} 
             /> }
        </Container>
        </Container>
     

  );
};
export default Profile;