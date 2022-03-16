import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import client from "../lib/api/client";
import { GoSearch } from "react-icons/go";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const { mutate } = useMutation(() => {
    logout();
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearch = (data) => {
    navigate(`/athletes/search?name=${data.name}`);
  };

  const logout = () => {
    client.post("/api/auth/logout");
    localStorage.removeItem("user");
    navigate("/");
    setUser("");
  };

  const onLogout = useCallback(() => {
    mutate();
  }, [mutate]);

  return (
    <div className="fixed top-0 left-0 w-full border-b bg-white z-10">
      <div className="max-w-6xl h-20 m-auto flex items-center justify-between">
        <Link to="/" className="text-2xl">
          suji<span className="font-bold">sam</span>
        </Link>
        <div className="flex items-center">
          <form
            onSubmit={handleSubmit(onSearch)}
            autoComplete="off"
            className="flex items-center"
          >
            <input
              type="text"
              className="border rounded-3xl text-md w-44 py-2 px-4 mr-2 focus:border-yellow-400 outline-none"
              {...register("name", { required: true })}
              placeholder={errors.name && "필수 입력입니다."}
            />
            <button type="submit" className="text-2xl outline-none">
              <GoSearch />
            </button>
          </form>
          {user ? (
            <button type="button" onClick={onLogout} className="text-2xl ml-4">
              <FiLogOut />
            </button>
          ) : (
            <Link to="/login" className="text-2xl ml-4">
              <FiLogIn />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
