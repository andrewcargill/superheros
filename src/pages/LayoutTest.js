import React, { useState } from "react";
import frame from "../styles/Containers.module.css";
import { Container, Row, Media, Card, Col } from "react-bootstrap";
import ProfilesPage from "./profiles/ProfilesPage";

function TestPage(){



return(
    <div>
        Test page
        <Row md={1} sm={1} xs={1} lg={3}>
        {/*SIDE CONTENT*/}
        <Col className={`${frame.Pink} order-lg-3 col-lg-3`}>SIDE BAR</Col>
        {/*MAIN CONTENT*/}
        <Col className="order-lg-1 col-lg-8">
        Main Content
        <Container className={frame.FixedHeight}>
        <ProfilesPage />
        </Container>
        </Col>
        {/*SPACER CONTENT*/}
        <Col className={`${frame.Blue} order-lg-2 col-lg-1`}>Spacer column</Col>
    </Row>
    </div>
);
}

export default TestPage;