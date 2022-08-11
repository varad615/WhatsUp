import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState();
  const sendmsg = () => {
    if (number === "") {
      setError("Please enter a number");
    } else {
      window.open(`https://api.whatsapp.com/send?phone=+91${number}&text=${msg}`);
    }
  };
  return (
    <div className="App">
      <div className="border-4 m-3 rounded-[5px] border-[#25D366] text-center py-3 text-[#25D366] mx-10 lg:mx-20 bg-[#2C373A]">
        WhatsUp
      </div>
      
      <div className="mx-10 lg:mx-20 text-center mt-10">
        <div className="justify-center inline-flex items-center">
          <h1 className="text-center text-xl font-bold text-white">
            +91 &nbsp;
          </h1>
          <input
            type="text"
            className="focus:outline-none border-0 bg-[#2C373A] rounded-md py-2 px-4"
            placeholder="Phone Number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <br />

        <div>
          <input
            type="text"
            className="focus:outline-none border-0 bg-[#2C373A] rounded-md py-2 px-4"
            placeholder="Message"
            onChange={(e) => setMsg(e.target.value)}
          />
          &nbsp;
          <button
            className="bg-[#25D366] mt-2 rounded-md py-2 px-4 text-black"
            onClick={sendmsg}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
