import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import client from "../../lib/api/client";
import Login from "../../components/auth/Login";

const LoginContainer = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation((data) => {
    login(data);
  });

  const login = async (data) => {
    const res = await client.post("/api/auth/login", data);
    if (res.status === 200) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(res.data.username));
    }
  };

  const onSubmit = useCallback(
    (data) => {
      mutate(data);
      // localStorage.setItem("user", JSON.stringify(user));
    },
    [mutate]
  );

  return (
    <div className="max-w-xl m-auto mt-8 py-6 relative">
      <Login onSubmit={onSubmit} />
      {/* {mutate.isLoading ? (
        "Login..."
      ) : (
        <>{isError ? <div>An error occurred: {isError.message}</div> : null}</>
      )} */}
    </div>
  );
};

export default LoginContainer;
