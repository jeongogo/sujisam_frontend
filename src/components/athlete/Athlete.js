import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLineChart, AiTwotoneEdit } from "react-icons/ai";

const Athlete = ({ athlete }) => {
  const {
    _id,
    name,
    gender,
    birthday,
    career,
    sports,
    dominance_hand,
    dominance_leg,
    team,
  } = athlete;

  return (
    <tr>
      <td className="border-b py-3 text-md text-center">
        <Link to={`/athletes/${_id}`}>{name}</Link>
      </td>
      <td className="border-b py-3 text-md text-center">{gender}</td>
      <td className="border-b py-3 text-md text-center">{birthday}</td>
      <td className="border-b py-3 text-md text-center">{career}</td>
      <td className="border-b py-3 text-md text-center">{sports}</td>
      <td className="border-b py-3 text-md text-center">{dominance_hand}</td>
      <td className="border-b py-3 text-md text-center">{dominance_leg}</td>
      <td className="border-b py-3 text-md text-center">{team}</td>
      <td className="border-b py-3 text-md text-right">
        <div className="flex justify-end">
          <Link
            to={`/athletes/${_id}/view`}
            className="px-2 py-2 font-medium mr-4 rounded-3xl border hover:bg-yellow-400"
          >
            <AiOutlineLineChart />
          </Link>
          <Link
            to={`/athletes/${_id}/write`}
            className="px-2 py-2 font-medium rounded-3xl border hover:bg-yellow-400"
          >
            <AiTwotoneEdit />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Athlete;
