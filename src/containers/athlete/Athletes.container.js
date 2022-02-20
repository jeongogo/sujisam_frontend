import React from "react";
import { useQuery } from "react-query";
import Athlete from "../../components/athlete/Athlete";
import Loader from "../../components/common/Loader";

const AthletesContainer = () => {
  const getAthletes = async () => {
    const data = await fetch("/api/athletes");
    return data.json();
  };

  const { isLoading, data, error } = useQuery("athletes", getAthletes);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="max-w-5xl m-auto py-16 relative">
      <div className="py-10 pl-12 pr-12 bg-white shadow-3xl rounded-3xl">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-b py-3 font-midium" scope="col">
                이름
              </th>
              <th className="border-b py-3 font-midium" scope="col">
                성별
              </th>
              <th className="border-b py-3 font-midium" scope="col">
                생년월일
              </th>
              <th className="border-b py-3 font-midium" scope="col">
                경력
              </th>
              <th className="border-b py-3 font-midium" scope="col">
                종목
              </th>
              <th className="border-b py-3 font-midium" scope="col">
                주손
              </th>
              <th className="border-b py-3 font-midium" scope="col">
                주발
              </th>
              <th className="border-b py-3 font-midium" scope="col">
                소속
              </th>
              <th className="border-b py-3 font-midium" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((athlete) => (
              <Athlete key={athlete._id} athlete={athlete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AthletesContainer;
