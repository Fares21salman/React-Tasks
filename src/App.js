import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import Reducer from "./components/Reducer";
import Welcome from "./components/Welcome";
import React, { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };
  return (
    <div className="App">
      <div className="Welcome">
        <Welcome />
      </div>
      <hr color="#333" />
      <div>
        <EmployeeForm addEmployee={addEmployee} />
        <EmployeeList employees={employees} />
        <Reducer />
      </div>
    </div>
  );
}

export default App;
