import React from "react";
import BackGround from "../assets/background.png";
import Book from "../assets/Book.png";
import Clock from "../assets/Clock.png";
import Live from "../assets/Live.png";
import Education from "../assets/Education.png";
import NoAds from "../assets/NoAds.png";
import Time from "../assets/time.png";
import Razorpay from "../assets/Razorpay.png";
import Plan from "../components/Plan";
import SubscriptionPlane from "../subscriptionplans";
import { useSelector } from "react-redux";
const SubscriptionPage = () => {
  const price = useSelector((state) => state.subscription.value);
  return (
    <div className="w-[100vw] h-[100vh] bg-[#172746] flex">
      <img
        src={BackGround}
        alt="BackGround"
        className="absolute h-full w-full top-0 bottom-0 left-0 right-0 z-0"
      />
      <div className="w-[1280px] mx-auto flex justify-between items-start h-fit z-10 mt-[69px]">
        {/* LEFT */}
        <div className="w-[530px] flex flex-col gap-14 mt-6">
          {/* Heading */}
          <div>
            <p className=" text-white text-[36px] font-[600] font-raleway">
              Access curated courses worth{" "}
            </p>
            <p className=" text-white text-[36px]  ">
              &#8377;
              <span>
                <div className="relative inline-block h-fit w-fit ml-2 font-semibold">
                  <p>18,500</p>
                  <div className="absolute h-[5px] w-full bg-[#bc1e1e] top-[27px] border-[1px] border-solid border-[#1a1a1ac0]"></div>
                </div>
              </span>{" "}
              at just{" "}
              <span className="text-[#0096FF] font-semibold">&#8377; 99</span>{" "}
              per year!
            </p>
          </div>
          <ul className="flex flex-col gap-9">
            <li className="flex items-center text-[23px] gap-16 font-roboto">
              <img src={Book} alt="Book" className="w-[36px]" />
              <p className="text-white">
                <span className="text-[#0096FF]  font-semibold ">100+</span> Job
                relevant courses
              </p>
            </li>
            <li className="flex items-center text-[23px] gap-16 font-roboto">
              <img src={Clock} alt="Book" className="w-[36px]" />
              <p className="text-white">
                <span className="text-[#0096FF]  font-semibold ">20,000+</span>{" "}
                Hours of content
              </p>
            </li>
            <li className="flex items-center text-[23px] gap-16 font-roboto">
              <img src={Live} alt="Book" className="w-[36px]" />
              <p className="text-white">
                <span className="text-[#0096FF]  font-semibold ">
                  Exclusive
                </span>{" "}
                webinar access
              </p>
            </li>
            <li className="flex items-center text-[23px] gap-16 font-roboto">
              <img src={Education} alt="Book" className="w-[36px]" />
              <p className="text-white">
                Scholarship worth
                <span className="text-[#0096FF]  font-semibold ">
                  {" "}
                  &#8377;94,500{" "}
                </span>
              </p>
            </li>
            <li className="flex items-center text-[23px] gap-16 font-roboto">
              <img src={NoAds} alt="Book" className="w-[36px]" />
              <p className="text-white">
                <span className="text-[#0096FF]  font-semibold ">Ad Free </span>
                learning experince
              </p>
            </li>
          </ul>
        </div>
        {/* RIGHT */}
        <div className="bg-[white] h-fit w-[31rem] rounded-md flex flex-col">
          <div className="w-[16rem] mx-auto flex justify-between items-center mt-2">
            <div className="flex flex-col h-fit w-fit justify-center items-center">
              <div className="h-9 w-9 rounded-full bg-[#0096FF] flex items-center justify-center text-white font-roboto font-semibold">
                1
              </div>
              <p className="text-[15px] font-roboto">Sign Up</p>
            </div>
            <div className="flex flex-col h-fit w-fit justify-center items-center">
              <div className="h-9 w-9 rounded-full bg-[#0096FF] flex items-center justify-center text-white font-roboto font-semibold">
                2
              </div>
              <p className="text-[15px] font-roboto">Subscribe</p>
            </div>
          </div>
          <p className="w-fit h-fit mt-2 mx-auto font-semibold font-roboto text-[18px]">
            Select your subscription plane
          </p>
          <div className="flex flex-col gap-3 mt-2">
            {SubscriptionPlane.map((plan) => {
              return (
                <Plan
                  key={plan.id}
                  monthprice={plan.monthprice}
                  months={plan.months}
                  yearprice={plan.yearprice}
                  id={plan.id}
                  active={plan.active}
                />
              );
            })}
          </div>
          <hr className="w-[92%] h-[2px] bg-gray-300 mx-auto mt-3" />
          <div className="w-[84.6%] h-fit flex justify-between text-[15px] items-center mx-auto mt-2">
            <p>Subscription Fee</p>
            <p>&#8377;18,500</p>
          </div>
          <div className="w-[91%] mt-2 h-fit mx-auto px-3 flex justify-between items-start bg-[#e6967d9d] border-[2px] border-solid border-[#f34510] rounded-md">
            <div className="flex flex-col h-full py-2 text-[#b63710] text-[14px] gap-2">
              <p className="font-semibold">Limited time offer</p>
              <p className="text-[11px] flex gap-2">
                {" "}
                <img src={Time} alt="time" className="w-[16px] h-[16px]" />
                Offer valid till 25th March 2023
              </p>
            </div>
            <p className="mt-2 text-[15px]">-&#8377;18,401</p>
          </div>
          <div className="w-[83%] mx-auto mt-2 flex justify-between items-center">
            <p className="text-[13px]">
              Total <span>(Incl. of 18% GST)</span>
            </p>
            <p className="text-[19px] font-semibold">&#8377;{price}</p>
          </div>
          <div className="w-[90%] flex justify-between items-center mx-auto mt-2">
            <div className="flex justify-center items-center w-[210px] h-12 rounded-sm border-[2px] border-solid border-[#1aa56b] text-[#1aa56b] text-[16px] cursor-pointer">
              CHANCEL
            </div>
            <div className="flex justify-center items-center w-[210px] h-12 rounded-sm bg-[#1aa56b] text-white text-[16px] cursor-pointer">
              PROCEED TO PAY
            </div>
          </div>
          <img
            src={Razorpay}
            alt="Razorpay"
            width={90}
            className="ml-6 mt-2 mb-1"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
