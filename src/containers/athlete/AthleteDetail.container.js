import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import client from "../../lib/api/client";
import AthleteDetail from "../../components/athlete/AthleteDetail";
import Loader from "../../components/common/Loader";

const AthleteDetailContainer = () => {
  const { id } = useParams();

  const getAthlete = async () => {
    const res = await client.get(`/api/athletes/${id}`);
    return res.data;
  };

  const { isLoading, data, error } = useQuery("athleteDetail", getAthlete);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="max-w-xl m-auto py-16 relative">
      <AthleteDetail athlete={data} />
    </div>
  );
};

export default AthleteDetailContainer;
