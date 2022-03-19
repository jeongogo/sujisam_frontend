import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../modules/store";
import client from "../../lib/api/client";
import AthleteRegister from "../../components/athlete/Register";

const AthleteRegisterContainer = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);

  // Login Check
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, []);

  // addAthlete
  const onSubmit = async (newAthlete) => {
    try {
      const res = await client.post("/api/athletes", newAthlete);
      alert("등록이 완료되었습니다.");
      navigate(`/athletes/${res.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl m-auto py-16 relative">
      <AthleteRegister onSubmit={onSubmit} />
    </div>
  );
};

export default AthleteRegisterContainer;
