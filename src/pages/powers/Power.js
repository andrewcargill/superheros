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

const Power = (props) => {
  const {
    id,
    owner,
    profile_image,
    powerPage,
    speed,
    flight,
    strength,
    vision,
    fire,
    lasers,
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
                <Avatar src={profile_image} height={55} />
                {owner}
              </Link>
            </Media>
          </Row>
          <Row>
            Hello
          </Row>
          <div>Speed: {speed}</div>
          <div>Flight: {flight}</div>
          <div>Strength: {strength}</div>
          <div>Vision: {vision}</div>
          <div>Fire: {fire}</div>
          <div>Lasers: {lasers}</div>
          {/* is current user the owner? */}
          <Container>
            Is Current User Owner? 
            {is_owner && powerPage && <MoreDropdown
             handleEdit={handleEdit} 
             /> }
        </Container>
        </Container>
     

  );
};
export default Power;