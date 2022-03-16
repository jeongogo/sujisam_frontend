import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../modules/store";
import client from "../../lib/api/client";
import Login from "../../components/auth/Login";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const setUser = useStore((state) => state.setUser);

  const onSubmit = async (data) => {
    await client
      .post("/api/auth/login", data)
      .then((res) => {
        setUser(res.data.username);
        navigate("/");
      })
      .catch((e) => {
        setError("아이디 또는 비밀번호가 일치하지 않습니다.");
        console.log(e);
      });
  };

  return (
    <div className="max-w-xl m-auto mt-8 py-6 relative">
      <Login onSubmit={onSubmit} error={error} />
    </div>
  );
};

export default LoginContainer;
