import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Power from "./Power";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function PowerPage() {
  const { id } = useParams();
  const [power, setPower] = useState({ results: [] });

  const currentUser = useCurrentUser();



  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: power }] = await Promise.all([
          axiosReq.get(`/powers/${id}/`),

        ]);
        setPower({ results: [power] });
        console.log(power);
        console.log('id', {id});

      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Power {...power.results[0]} setPowers={setPower} powerPage/>

      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PowerPage;