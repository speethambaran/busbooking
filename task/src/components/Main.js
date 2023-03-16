import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import mainBG2 from "..//assets/mainBG2.jpg";

const Main = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log("date: " + event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const customAxios = axios.create({
      responseType: "data",
    });
    customAxios
      .get("http://localhost:8000/getInfo", {
        params: {
          from: from,
          to: to,
        },
      })
      .then((response) => {
        const dataParsed = response.data;
        const dataAfterParser = JSON.parse(dataParsed);
        //console.log("dataAfterParser", dataAfterParser);
        if(dataAfterParser.length > 0) {
          navigate("/seat", { state: { data: dataAfterParser } });
        }else {
          alert("No Bus available")
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full h-[500px] relative">
      <img
        src={mainBG2}
        alt=""
        className="absolute object-cover h-[500px] w-full"
      />

      <form
        action=""
        className="top-[200px] left-[15%] absolute"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input
          type="text"
          className=" py-2 w-[300px] rounded-xl border-none drop-shadow-xl outline-none placeholder-text-grey-500 placeholder:pl-2"
          placeholder="Leaving From"
          name="from"
          required
          onChange={handleFromChange}
        />

        <input
          type="text"
          className=" py-2 w-[300px] ml-2 rounded-xl drop-shadow-xl outline-none placeholder-text-grey-500 placeholder:pl-2"
          placeholder="Going To"
          name="to"
          required
          onChange={handleToChange}
        />

        {/* <input
          type="date"
          className=" py-2 w-[300px] ml-2 rounded-xl drop-shadow-xl outline-none placeholder-text-grey-500 placeholder:pl-2"
          placeholder="Date of Journey"
          name="date"
          required
          onChange={handleDateChange}
        /> */}
        <button className=" bg-white py-2 rounded-xl ml-2 px-3 drop-shadow-xl">
          Search Buses
        </button>
      </form>
    </div>
  );
};

export default Main;
