import React from "react";

const Foot = () => {
  return (
    <div className="w-full h-[200px] flex justify-center items-center bg-lime-500 text-white ">
      <div className="flex flex-row justify-between">
        <div className="mr-[170px] flex flex-col drop-shadow-md">
          <h1 className="text-xl mb-2 ">Book</h1>
          <p>Bus Tickets</p>
          <p>Bus Hire</p>
        </div>
        <div className="mr-[170px] flex flex-col drop-shadow-md">
          <h1 className="text-xl mb-2">About busGo</h1>
          <p>Contact Us</p>
          <p>About Us</p>
        </div>
        <div className="mr-[170px] flex flex-col drop-shadow-md">
          <h1 className="text-xl mb-2">Travellers Tools</h1>
          <p>Tracking</p>
          <p>Cancellations</p>
        </div>
        <div className="mr-[170px] flex flex-col drop-shadow-md">
          <h1 className="text-xl mb-2">Global Site</h1>
          <p>India</p>
          <p>USA</p>
        </div>
      </div>
    </div>
  );
};

export default Foot;
