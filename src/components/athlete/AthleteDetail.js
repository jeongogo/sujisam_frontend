import React from "react";

const AthleteDetail = ({ athlete }) => {
  const {
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
    <div className="py-10 pl-20 pr-20 bg-white shadow-3xl rounded-3xl">
      <ul>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">이름</h3>
          <p>{name}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">성별</h3>
          <p>{gender}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">생년월일</h3>
          <p>{birthday}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">경력</h3>
          <p>{career}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">종목</h3>
          <p>{sports}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">주 손</h3>
          <p>{dominance_hand}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">주 발</h3>
          <p>{dominance_leg}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">소속</h3>
          <p>{team}</p>
        </li>
      </ul>
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="w-40 h-12 mr-2 font-medium rounded-3xl bg-gray-200"
        >
          수정하기
        </button>
        <button
          type="button"
          className="w-40 h-12 mr-2 font-medium rounded-3xl bg-yellow-400"
        >
          기록보기
        </button>
        <button
          type="button"
          className="w-40 h-12 font-medium rounded-3xl bg-yellow-400"
        >
          측정하기
        </button>
      </div>
    </div>
  );
};

export default AthleteDetail;
