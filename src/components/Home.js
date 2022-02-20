import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Home = ({ count }) => {
  return (
    <div className="max-w-md m-auto my-10 px-6 py-12 bg-white shadow-3xl rounded-3xl text-center">
      <div className="text-6xl font-bold">
        <CountUp start={1} end={count} duration={0.5} />
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/athletes/register"
          className="text-lg py-3 px-8 mr-3 bg-yellow-400 rounded-3xl"
        >
          신규 선수 등록
        </Link>
        <Link
          to="/athletes"
          className="text-lg py-3 px-8 bg-yellow-400 rounded-3xl"
        >
          선수 리스트
        </Link>
      </div>
    </div>
  );
};

export default Home;
