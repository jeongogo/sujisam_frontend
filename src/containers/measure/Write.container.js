import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import client from "../../lib/api/client";
import MeasureMonitoringWrite from "../../components/measure/MonitoringWrite";
import MeasurePeriodicgWrite from "../../components/measure/PeriodicgWrite";
import Loader from "../../components/common/Loader";

const MeasureWriteContainer = () => {
  const [active, setActive] = useState("monitoring");

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

  const onChangeMeasure = (text) => {
    setActive(text);
  };

  const onSumitMonitoring = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-6xl m-auto mt-8 py-6 relative">
      <div className="flex justify-center relative">
        <h1 className="text-3xl">{data.name}</h1>
        <div className="btn-group absolute left-0 top-0">
          <button
            type="button"
            className={`py-2 px-4 mr-2 ${
              active === "monitoring" ? "bg-yellow-300" : "bg-gray-200"
            } rounded-md`}
            onClick={() => onChangeMeasure("monitoring")}
          >
            monitoring
          </button>
          <button
            type="button"
            className={`py-2 px-4 mr-2 ${
              active === "periodic" ? "bg-yellow-300" : "bg-gray-200"
            } rounded-md`}
            onClick={() => onChangeMeasure("periodic")}
          >
            periodic
          </button>
        </div>
      </div>
      {active === "monitoring" ? (
        <MeasureMonitoringWrite onSumitMonitoring={onSumitMonitoring} />
      ) : (
        <MeasurePeriodicgWrite />
      )}
    </div>
  );
};

export default MeasureWriteContainer;
