import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Container,
  Row
} from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { EditDropdown } from "../../components/EditDropdown";
import frame from "../../styles/Containers.module.css";

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
  
  const handleEdit = () => {
    history.push(`/powers/${id}/edit`);
  };

  return (

    <Container className={`${frame.ContentToneBorder}`}>
          {/* power content */}
          <div>Speed: {speed}</div>
          <div>Flight: {flight}</div>
          <div>Strength: {strength}</div>
          <div>Vision: {vision}</div>
          <div>Fire: {fire}</div>
          <div>Lasers: {lasers}</div>
          {/* is current user the owner? */}
          <Container> 
            {is_owner && powerPage && <EditDropdown
             handleEdit={handleEdit} 
             /> }
        </Container>
        </Container>
     

  );
};
export default Power;