import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;
  console.log("seatno", data);
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[1000px] h-[200px] mt-[250px] bg-lime-400">
        <div className="flex justify-center items-center">
          <h1 className="mt-[20px] font-bold text-2xl underline ">
            Thank You for using busGO
          </h1>
        </div>
        <h1 className="flex justify-center mt-6 text-xl">
          Seat number <span className="mx-1 font-bold text-red-600">{data}</span> is booked for you, Enjoy your ride
        </h1>
        <button
          onClick={handleClick}
          className="bg-slate-400 float-right mt-10 mr-10 px-2 "
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
