import React, { useState } from "react";
import "./employeeForm.css";

const EmployeeForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    employeeId: "",
    age: "",
    domain: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!employee.firstName) errors.firstName = "First name is required";
    if (!employee.lastName) errors.lastName = "Last name is required";
    if (!employee.employeeId) errors.employeeId = "Employee ID is required";
    if (!employee.age || isNaN(employee.age) || employee.age <= 0)
      errors.age = "Valid age is required";
    if (!employee.domain) errors.domain = "Domain is required";
    if (!employee.phoneNumber || isNaN(employee.phoneNumber))
      errors.phoneNumber = "Valid phone number is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      addEmployee(employee);
      setEmployee({
        firstName: "",
        lastName: "",
        employeeId: "",
        age: "",
        domain: "",
        phoneNumber: "",
      });
      setErrors({});
    }
  };

  return (
    <form
      style={{
        backgroundColor: "chocolate",
        padding: "20px",
        marginTop: "50px",
        marginBottom: "20px",
      }}
      onSubmit={handleSubmit}
      className="employee-form"
    >
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={employee.firstName}
          onChange={handleChange}
          className="formcss"
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={handleChange}
          className="formcss"
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={handleChange}
          className="formcss"
        />
        {errors.employeeId && <p className="error">{errors.employeeId}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={employee.age}
          onChange={handleChange}
          className="formcss"
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="domain"
          placeholder="Domain"
          value={employee.domain}
          onChange={handleChange}
          className="formcss"
        />
        {errors.domain && <p className="error">{errors.domain}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={employee.phoneNumber}
          onChange={handleChange}
          className="formcss"
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>
      <button
        type="submit"
        className="submit-button"
        style={{ marginBottom: "20px" }}
      >
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
