import Home from "./components/Home";
import Login from "./components/Login";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import DisplaySeats from "./components/DisplaySeats";
import SeatPicker from "./components/SeatPicker";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/seat" element={<DisplaySeats />} />
          <Route path="/pick" element={<SeatPicker />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
