import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Foot from "./Foot";

const DisplaySeats = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  const handleClickPick = (index) => {
    navigate("/pick", { state: { data: data[index] } });
  };

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-[500px]  flex justify-center">
        <div className="w-[1000px] h-[450px] bg-slate-50 mt-5 mb-5 ">
          <h1 className="font-bold text-xl ">Available Buses</h1>
          {data.map((bus, index) => {
            return (
              <>
                <div className="text-black w-[980px] h-[100px] mx-2 my-2 bg-slate-400">
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
                  <h1 className="mx-2 mt-1 font">
                    Bus Name : <span className="font-bold">{bus.name}</span>
                  </h1>
                  <button
                    onClick={() => handleClickPick(index)}
                    className="float-right bg-lime-500 text-black py-1 px-1 rounded-lg mr-2"
                  >
                    Select Seat
                  </button>
                </div>
                <br />
              </>
            );
          })}
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default DisplaySeats;
