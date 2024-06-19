import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
    case "decremented_age": {
      return {
        name: state.name,
        age: state.age - 1,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const initialState = { name: "Salman", age: 22 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  function handleDecButtonClick() {
    dispatch({ type: "decremented_age" });
  }

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
}
