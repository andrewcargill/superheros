import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import btnStyles from "../../styles/Button.module.css";
import frame from "../../styles/Containers.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import appStyle from "../../App.module.css";
function PowerEditForm() {
  const [errors, setErrors] = useState({});

  const [powerData, setPowerData] = useState({
    is_owner: "",
    speed: "",
    flight: "",
    strength: "",
    vision: "",
    fire: "",
    lasers: "",
  });
  const { speed, flight, strength, vision, fire, lasers } = powerData;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/powers/${id}/`);
        const {
          is_owner,
          speed,
          flight,
          strength,
          vision,
          fire,
          lasers,
        } = data;
        
        is_owner
          ? setPowerData({ speed, flight, strength, vision, fire, lasers })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setPowerData({
      ...powerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("speed", speed);
    formData.append("flight", flight);
    formData.append("strength", strength);
    formData.append("vision", vision);
    formData.append("fire", fire);
    formData.append("lasers", lasers);

    try {
      await axiosReq.put(`/powers/${id}`, formData);
      history.push(`/profiles/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Row className="align-contents-center">
        <Col>
          <Form.Group>
            <Form.Label>speed</Form.Label>
            <Form.Control
              type="number"
              name="speed"
              max="5"
              value={speed}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.speed?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>flight</Form.Label>
            <Form.Control
              type="number"
              name="flight"
              max="5"
              value={flight}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.flight?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>strength</Form.Label>
            <Form.Control
              type="number"
              name="strength"
              max="5"
              value={strength}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.strength?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>vision</Form.Label>
            <Form.Control
              type="number"
              name="vision"
              max="5"
              value={vision}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.vision?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>fire</Form.Label>
            <Form.Control
              type="number"
              name="fire"
              max="5"
              value={fire}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.fire?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>lasers</Form.Label>
            <Form.Control
              type="number"
              name="lasers"
              max="5"
              value={lasers}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.lasers?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>

      <Button
        className={`${btnStyles.ButtonWhite} ${appStyle.Terminal} btn text-uppercase`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.ButtonWhite} ${appStyle.Terminal} btn text-uppercase`}
        type="submit"
      >
        update
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Container
          className={`${frame.ContainerBlackBorder} ${appStyle.Terminal} container-fluid`}
        >
          <p> Please update with your official ratings - </p>
          {textFields}
        </Container>
      </div>
    </Form>
  );
}

export default PowerEditForm;
