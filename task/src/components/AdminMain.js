import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import Das from "../assets/Das.jpeg";
import Axios from "axios";

const AdminMain = () => {
  const [busList, setBusList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/getInfo").then((response) => {
      setBusList(response.data);
    });
  }, []);

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-[250px] h-screen bg-lime-300 ">
        <div className=" flexjustify-between items-center mx-5 py-5">
          <img
            src={Das}
            alt=""
            className="w-20 rounded-[200px] border-2 border-black"
          />
          <h1 className="mt-2">Welcome Admin</h1>
        </div>
        <br />
        <h1 className="ml-4 text-xl inline-flex">
          <AiOutlineEdit size={30} className="mr-4 " />
          Edit
        </h1>
      </div>
      <div className="w-full h-screen">
        <h1 className="text-2xl ml-5 mt-5 mb-5">Available Buses</h1>
        {busList.map((bus) => {
          return (
            <>
              <div className="text-black w-[980px] h-[100px] mx-5 my-4 bg-slate-400">
                <div className="flex justify-between">
                  <h1 className="mx-2">
                    Departure: <span className="font-bold">{bus.from}</span>
                  </h1>
                  <h1 className="mx-2">
                    Duration: <span className="font-bold">{bus.time}</span>
                  </h1>
                  <h1 className="mx-2">
                    Arrival: <span className="font-bold">{bus.to}</span>
                  </h1>
                </div>
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AdminMain;
