import React, { useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import Reducer from "./components/Reducer";
import Welcome from "./components/Welcome";
import { GlobalStateProvider } from "./context/GlobalState";
import Forms from "./components/Forms";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <GlobalStateProvider>
      <div className="App">
        <div className="Welcome">
          <Welcome />
        </div>
        <hr color="#333" />
        <div>
          <EmployeeForm addEmployee={addEmployee} />
          <EmployeeList employees={employees} />
          <Reducer />
          <Forms />
        </div>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
