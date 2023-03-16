import React from "react";

import {
  MdAirlineSeatReclineExtra,
  MdOutlineSanitizer,
  MdOutlineFastfood,
} from "react-icons/md";
import { BsPlug, BsWifi } from "react-icons/bs";
import { GiStreetLight, GiWaterBottle, GiBookshelf } from "react-icons/gi";
import { BiBlanket } from "react-icons/bi";

const Amenities = () => {
  return (
    <div className="w-full h-[500px] my-10 flex justify-center items-center">
      <div className="bg-slate-100 w-[1200px] h-[500px]">
        <h1 className="mt-10 left-4 text-2xl  flex justify-center items-center">
          Bus Amenities
        </h1>
        <div className="flex flex-row justify-center items-center mt-14">
          <div className="flex flex-row justify-center items-center mx-10">
            <MdAirlineSeatReclineExtra size={30} />
            <h1 className="ml-10">Reclining Seat</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <BsPlug size={30} />
            <h1 className="ml-10">Charging Port</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <MdOutlineSanitizer size={30} />
            <h1 className="ml-10">Sanitizer Provided</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-14">
          <div className="flex flex-row justify-center items-center mx-10">
            <GiStreetLight size={30} />
            <h1 className="ml-10">Reading Light</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <BsWifi size={30} />
            <h1 className="ml-10">WiFi Avilabile</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <BiBlanket size={30} />
            <h1 className="ml-10">Blankets Provided</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-14">
          <div className="flex flex-row justify-center items-center mx-10">
            <GiWaterBottle size={30} />
            <h1 className="ml-10"> Water Bottles</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <GiBookshelf size={30} />
            <h1 className="ml-10">Books and Mag</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <MdOutlineFastfood size={30} />
            <h1 className="ml-10">Foods and Snacks</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-14">
          <div className="flex flex-row justify-center items-center mx-10">
            <MdAirlineSeatReclineExtra size={30} />
            <h1 className="ml-10">Reclining Seat</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <BsPlug size={30} />
            <h1 className="ml-10">Charging Port</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <MdOutlineSanitizer size={30} />
            <h1 className="ml-10">Sanitizer Provided</h1>
            <h1 className="ml-10">Yes</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
