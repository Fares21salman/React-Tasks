import React from "react";

const DateAndTime = () => {
  const currDate = new Date().toLocaleDateString();
  return (
    <div style={{ backgroundColor: "white" }}>
      <h2>Current Date: {currDate}</h2>
    </div>
  );
};

export default DateAndTime;
