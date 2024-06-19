import React from "react";
import "./employeeForm.css";

const EmployeeCard = ({ employee }) => {
  const handleClick = () => {
    alert(employee.firstName);
  };

  return (
    <div className="employee-card" onClick={handleClick}>
      <h3 className="new">
        {employee.firstName} {employee.lastName}
      </h3>
      <p className="new">Employee ID: {employee.employeeId}</p>
      <p className="new">Age: {employee.age}</p>
      <p className="new">Domain: {employee.domain}</p>
      <p className="new">Phone Number: {employee.phoneNumber}</p>
    </div>
  );
};

export default EmployeeCard;
