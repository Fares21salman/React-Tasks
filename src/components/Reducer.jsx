import React from "react";
import { useGlobalState } from "../context/GlobalState";

const Reducer = () => {
  const { state, dispatch } = useGlobalState();

  const handleButtonClick = () => {
    dispatch({ type: "incremented_age" });
  };

  const handleDecButtonClick = () => {
    dispatch({ type: "decremented_age" });
  };

  const handleInputChange = (e) => {
    dispatch({ type: "changed_name", nextName: e.target.value });
  };

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <button onClick={handleDecButtonClick}>Decrement age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
};

export default Reducer;
