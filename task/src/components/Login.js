import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "Das" && password === "mass") {
      navigate("/home");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screenw-full h-screen bg-gradient-to-r from-lime-700 via-orange-900 to-red-800">
      <div className=" w-[500px] h-[490px] text-white bg-black/20 rounded-2xl">
        <div className="w-[400px] py-10 mx-auto">
          <h1 className="text-4xl font-light ml-10 ">
            <Typewriter
              options={{
                strings: ["Welcome to busGo"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <br />
          <br />

          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              name="name"
              className="mt-8 rounded-xl w-[300px] py-1 ml-10 text-black placeholder:pl-2"
              placeholder="Username"
              required
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              name="password"
              className="mt-5 rounded-xl w-[300px] py-1 ml-10 text-black placeholder:pl-2"
              placeholder="Password"
              required
              onChange={handlePasswordChange}
            />
            <br />
            <button
              className="bg-orange-500 rounded-md py-1 ml-[150px] px-3 text-xl mt-5 hover:drop-shadow-2xl "
            >
              Login
            </button>
            <hr className="mt-6" />
          </form>

        </div>

        <h1 className="font-light ml-11">
          Trouble logging in ? contact us at
          <a href="mailto: abc@example.com" className="hover:underline ml-1">
            here
          </a>
        </h1>
        <br />
        <h1 className="font-light ml-11">© All Rights are Reserved</h1>
      </div>
    </div>
  );
};

export default Login;
