import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Profile from "./Profile";
import Power from "../powers/PowerPage";
import frame from "../../styles/Containers.module.css";
import { Container } from "react-bootstrap";

function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState({ results: [] });
  const [power, setPower] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: profile }, { data: power }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/powers/?owner=${id}`),
        ]);
        setProfile({ results: [profile] });
        setPower({ results: [power] });
        console.log("------------andy Line 33 power", power);
        console.log("------------andy Line 33 profile", profile.id);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row>
      <Container className={frame.SingleComponent}>
        <Row>
          <Profile
            {...profile.results[0]}
            setProfiles={setProfile}
            profilePage
          />
        </Row>
        <Row>
          <Power key={power.id} />
        </Row>
      </Container>
    </Row>
  );
}

export default ProfilePage;
