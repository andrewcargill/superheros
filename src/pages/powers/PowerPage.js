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
    <div>
        <Power {...power.results[0]} setPowers={setPower} powerPage/>
    </div>
  );
}

export default PowerPage;