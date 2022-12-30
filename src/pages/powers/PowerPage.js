import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Power from "./Power";

function PowerPage() {
  const { id } = useParams();
  const [power, setPower] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: power }] = await Promise.all([
          axiosReq.get(`/powers/${id}/`),
        ]);
        setPower({ results: [power] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div className="container-fluid">
      <Power {...power.results[0]} setPowers={setPower} powerPage />
    </div>
  );
}

export default PowerPage;
