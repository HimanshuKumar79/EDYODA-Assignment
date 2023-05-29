import React from "react";
import { useDispatch } from "react-redux";
import { changePlan } from "../subscriptionState/slice/subscriptionSlice";

const Plan = ({ months, yearprice, monthprice, id, active }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={` w-[29rem] h-16 bg-white border-[3px] border-solid flex justify-between items-center  font-roboto mx-auto px-3 rounded-lg relative `}
    >
      {!active && (
        <>
          <div className="h-[104%] w-[101%] absolute -top-[1px] -left-[1px] bottom-0  bg-[#9b9494a9] rounded-lg "></div>
          <div className="absolute top-0 left-16 px-3 py-0 text-white font-roboto bg-[#F77171] text-[11px] rounded-sm  ">
            Offer Expired
          </div>
        </>
      )}
      {id === 2 && (
        <div className="absolute top-0 left-16 px-3 py-0 text-white font-roboto bg-[#47BA68] text-[11px] rounded-sm">
          Recommended
        </div>
      )}
      <div className="flex items-center gap-3">
        <label className="mt-1">
          <input
            type="radio"
            onClick={() => dispatch(changePlan(yearprice))}
            className={`${
              active
                ? "cursor-pointer checked:before:content-['\\f00c'] checkicon appearance-none relative border-[2px] border-solid border-gray-400 checked:bg-[#47BA68] checked:border-none  checked:before:text-[16px] checked:before:text-white checked:before:absolute checked:before:h-full checked:before:w-full checked:before:flex checked:before:items-center checked:before:justify-center "
                : "appearance-none bg-gray-400 border-[2px] border-solid border-spacing-20"
            }
             h-6 w-6 rounded-full
            `}
            name={!active ? "expire" : "plan"}
          />
        </label>
        <p className="text-[14px]">{months}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-[16px]">
          <span className="text-[12px]">Total</span> &#8377;{yearprice}
        </p>
        <p className="text-[12px]">
          &#8377;{monthprice}
          <span className="text-[10px] text-[#535050]"> /mo</span>
        </p>
      </div>
    </div>
  );
};

export default Plan;
