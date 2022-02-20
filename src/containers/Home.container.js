import React from "react";
import { useQuery } from "react-query";
import Home from "../components/Home";
import Loader from "../components/common/Loader";

const HomeContainer = () => {
  const getAthletesCount = async () => {
    const data = await fetch("/api/athletes/count");
    return data.json();
  };

  const { isLoading, data, error } = useQuery(
    "athletesCount",
    getAthletesCount
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="max-w-6xl m-auto py-6 relative">
      <Home count={data} />
    </div>
  );
};

export default HomeContainer;
