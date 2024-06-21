import React, { createContext, useReducer, useContext } from "react";

const CreatedContext = createContext();

const initialState = { name: "Salman", age: 22 };

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age":
      return { ...state, age: state.age + 1 };
    case "decremented_age":
      return { ...state, age: state.age - 1 };
    case "changed_name":
      return { ...state, name: action.nextName };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CreatedContext.Provider value={{ state, dispatch }}>
      {children}
    </CreatedContext.Provider>
  );
};

export const useGlobalState = () => useContext(CreatedContext);
