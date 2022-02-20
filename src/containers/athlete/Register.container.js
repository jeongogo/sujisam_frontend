import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import client from "../../lib/api/client";
import AthleteRegister from "../../components/athlete/Register";

const AthleteRegisterContainer = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation((newAthlete) => {
    addAthlete(newAthlete);
  });

  const addAthlete = async (newAthlete) => {
    const res = await client.post("/api/athletes", newAthlete);
    if (res.status === 200) {
      navigate(`/athletes/${res.data._id}`);
    }
  };

  const onSubmit = useCallback(
    (newAthlete) => {
      mutate(newAthlete);
    },
    [mutate]
  );

  return (
    <div className="max-w-xl m-auto py-16 relative">
      <AthleteRegister onSubmit={onSubmit} />
    </div>
  );
};

export default AthleteRegisterContainer;
