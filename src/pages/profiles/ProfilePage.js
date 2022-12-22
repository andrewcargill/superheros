import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Profile from "./Profile";

import { useCurrentUser } from "../../contexts/CurrentUserContext";



function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState({ results: [] });
  const [power, setPower] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const owner = profile.results[0] && profile.results[0].owner;
  


  useEffect(() => {
    
    const handleMount = async () => {
      try {
        const [{ data: profile}, {data: power }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/powers/?owner={${owner}}`),
        ]);
        setProfile({ results: [profile] });
        setPower({ results: [power] });
        console.log('------------andy Line 33 power', power);
        

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
        <Profile {...profile.results[0]} setProfiles={setProfile} profilePage/>

      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default ProfilePage;