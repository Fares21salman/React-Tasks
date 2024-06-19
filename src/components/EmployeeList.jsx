import React from "react";
import EmployeeCard from "./EmployeeCard";
import "./employeeForm.css";

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
