import React, { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import client from "../../lib/api/client";
import MeasureMonitoringWrite from "../../components/measure/MonitoringWrite";
import MeasurePeriodicWrite from "../../components/measure/PeriodicWrite";
import Loader from "../../components/common/Loader";

const MeasureWriteContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [active, setActive] = useState("monitoring");

  const onChangeMeasure = (text) => {
    setActive(text);
  };

  const getAthlete = async () => {
    const res = await client.get(`/api/athletes/${id}`);
    return res.data;
  };

  const { isLoading, data, error } = useQuery("athleteDetail", getAthlete);

  const writeMonitoring = async (data) => {
    const res = await client.post(`/api/athletes/${id}/write/monitoring`, data);
    if (res.status === 200) {
      navigate(`/athletes/${id}/view`);
    }
  };

  const writePeriodic = async (data) => {
    const res = await client.post(`/api/athletes/${id}/write/periodic`, data);
    if (res.status === 200) {
      navigate(`/athletes/${id}/view`);
    }
  };

  const { mutate: mutateMonitoring } = useMutation((data) => {
    writeMonitoring(data);
  });

  const { mutate: mutatePeriodic } = useMutation((data) => {
    writePeriodic(data);
  });

  const onSumitMonitoring = useCallback(
    (data) => {
      mutateMonitoring(data);
    },
    [mutateMonitoring]
  );

  const onSumitPeriodic = useCallback(
    (data) => {
      mutatePeriodic(data);
    },
    [mutatePeriodic]
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

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
        <MeasureMonitoringWrite onSumitMeasure={onSumitMonitoring} />
      ) : (
        <MeasurePeriodicWrite onSumitMeasure={onSumitPeriodic} />
      )}
    </div>
  );
};

export default MeasureWriteContainer;
