import React from "react";
import { useForm } from "react-hook-form";

const AthleteRegister = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = (data) => onSubmit(data);

  return (
    <div className="py-10 pl-12 pr-20 bg-white shadow-3xl rounded-3xl">
      <form onSubmit={handleSubmit(onRegister)} autoComplete="off">
        <ul className="max-w-xl m-auto">
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">이름</label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">성별</label>
            <div className="w-full pt-2">
              <input
                id="gender_mail"
                {...register("gender", { required: true })}
                type="radio"
                className="ml-3"
                value="남자"
              />
              <label htmlFor="gender_mail" className="ml-1 cursor-pointer">
                남자
              </label>
              <input
                id="gender_femail"
                {...register("gender", { required: true })}
                type="radio"
                className="ml-4"
                value="여자"
              />
              <label htmlFor="gender_femail" className="ml-1 cursor-pointer">
                여자
              </label>
              {errors.gender && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">
              생년월일
            </label>
            <div className="w-full">
              <input
                type="date"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("birthday", { required: true })}
              />
              {errors.birthday && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">경력</label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("career", { required: true })}
              />
              {errors.career && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">종목</label>
            <div className="w-full pt-1">
              <select
                {...register("sports", { required: true })}
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2  "
              >
                <option value="축구">축구</option>
              </select>
              {errors.sports && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">주 손</label>
            <div className="w-full pt-2">
              <input
                id="dominance_hand_left"
                {...register("dominance_hand", { required: true })}
                type="radio"
                className="ml-3"
                value="왼손"
              />
              <label
                htmlFor="dominance_hand_left"
                className="ml-1 cursor-pointer"
              >
                왼손
              </label>
              <input
                id="dominance_hand_right"
                {...register("dominance_hand", { required: true })}
                type="radio"
                className="ml-4"
                value="오른손"
              />
              <label
                htmlFor="dominance_hand_right"
                className="ml-1 cursor-pointer"
              >
                오른손
              </label>
              {errors.dominance_hand && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">주 발</label>
            <div className="w-full pt-2">
              <input
                id="dominance_leg_left"
                {...register("dominance_leg", { required: true })}
                type="radio"
                className="ml-3"
                value="왼발"
              />
              <label
                htmlFor="dominance_leg_left"
                className="ml-1 cursor-pointer"
              >
                왼발
              </label>
              <input
                id="dominance_leg_right"
                {...register("dominance_leg", { required: true })}
                type="radio"
                className="ml-4"
                value="오른발"
              />
              <label
                htmlFor="dominance_leg_right"
                className="ml-1 cursor-pointer"
              >
                오른발
              </label>
              {errors.dominance_leg && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">소속</label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("team", { required: true })}
              />
              {errors.team && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
        </ul>
        <div className="flex justify-center mt-8 pl-8">
          <button
            type="submit"
            className="w-40 h-12 font-medium rounded-3xl bg-yellow-400"
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default AthleteRegister;
