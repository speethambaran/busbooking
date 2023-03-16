import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdEventSeat } from "react-icons/md";
import axios from "axios";

const SeatPicker = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;
  const seatsInfo = data.seat;
  console.log("seatinfo", seatsInfo);

  const [availableInfo, setAvailableInfo] = useState();
  const [selectedSeatNum, setSelectedSeatNum] = useState();

  const clickFunction = (available, seatno) => {
    setAvailableInfo(available);
    setSelectedSeatNum(seatno);
  };

  useEffect(() => {
  }, [availableInfo, selectedSeatNum]);

  const handleClickForwardToNext = () => {
    if(availableInfo){
      navigate("/success", { state: { data: selectedSeatNum } })
    }else{
      alert("Select non-booked seats to proceed")
    }
  };

  const [dataToSend, setDataToSend] = useState({});

  const bookSeat = (busno, seatno) => {
    axios
      .post("http://localhost:8000/book-seat", {
        busno: busno,
        seatno: seatno,
      })
      .then(function (response) {
        console.log("data recived ++++", response.data.seat);
        setDataToSend(response.data.seat);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
  }, [dataToSend]);

  return (
    <>
      <div className="flex flex-row justify-center items-center mt-[50px]">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <div>
          {seatsInfo.slice(0, 6).map((item) => {
            const available = item.isAvialable;
            const handleClick = () => {
              bookSeat(data.busno, item.seatno);
              clickFunction(available, item.seatno);
              if (available) {
                {}
                toast("Seat Booked", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              } else {
                toast("Seat Unbooked", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }
            };
            return (
              <div key={item.seatno} className="flex flex-row">
                <div className="">
                  <MdEventSeat
                    size={40}
                    onClick={handleClick}
                    className={
                      "" +
                      (available
                        ? "text-green-500 mx-2 my-2 cursor-pointer active:text-gray-600 focus:text-blue-500"
                        : "text-red-600 mx-2 my-2 cursor-not-allowed")
                    }
                  />
                  <h1 className="mx-5">{item.seatno}</h1>

                  <hr />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {seatsInfo.slice(6, 12).map((item) => {
            const available = item.isAvialable;
            const handleClick = () => {
              bookSeat(data.busno, item.seatno);
              clickFunction(available, item.seatno);
              if (available) {
                toast("Seat Booked", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              } else {
                toast("Seat Unbooked", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }
            };
            return (
              <div key={item.seatno} className="flex flex-row">
                <div>
                  <MdEventSeat
                    size={40}
                    onClick={handleClick}
                    className={
                      "" +
                      (available
                        ? "text-green-500 mx-2 my-2 cursor-pointer "
                        : "text-red-600 mx-2 my-2 cursor-not-allowed")
                    }
                  />
                  <h1 className="mx-5">{item.seatno}</h1>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <h1>Driver is here</h1>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={handleClickForwardToNext}
          className="bg-lime-500 py-1 px-2 rounded-xl"
        >
          Proceed
        </button>
      </div>
    </>
  );
};

export default SeatPicker;
