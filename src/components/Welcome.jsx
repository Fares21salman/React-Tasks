import DateAndTime from "./DateAndTime";
import React, { useState, useEffect } from "react";
import "./employeeForm.css";

const Welcome = () => {
  const name = "Salman";
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const updateDate = () => {
    console.log("clicked");
    setDateTime(new Date());
  };

  const currTime = dateTime.toLocaleTimeString();

  return (
    <div
      style={{
        backgroundColor: "chocolate",
        marginTop: "20px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h1 style={{ backgroundColor: "white" }}>
        Welcome to <span>{name}</span> website!!!
      </h1>
      <DateAndTime />
      <h2 style={{ backgroundColor: "white" }}>Current Time: {currTime}</h2>
      <button
        onClick={updateDate}
        className="btnstyle"
        style={{ width: "200px", height: "40px", marginTop: "30px" }}
      >
        Update Date
      </button>
    </div>
  );
};

export default Welcome;
