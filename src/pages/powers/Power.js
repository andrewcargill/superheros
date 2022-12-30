import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { EditDropdown } from "../../components/EditDropdown";
import frame from "../../styles/Containers.module.css";
import appStyle from "../../App.module.css";

const Power = (props) => {
  const {
    id,
    owner,
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

    <Container className={`${frame.ContainerBlackBorder} container-fluid`}>
          {/* power content */}
          <Row className={appStyle.Terminal}>
            <Col>
          <div>Speed: {speed}</div>
          <div>Flight: {flight}</div>
          <div>Strength: {strength}</div>
          </Col>
          <Col>
          <div>Vision: {vision}</div>
          <div>Fire: {fire}</div>
          <div>Lasers: {lasers}</div>
          </Col>
          </Row>
          <Container>
            <Row className="text-white">
            {is_owner && powerPage && <EditDropdown
             handleEdit={handleEdit} 
             /> }
             </Row>
        </Container>
        </Container>
  );
};
export default Power;