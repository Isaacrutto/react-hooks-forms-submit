import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  // Handlers for input changes
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Handler for form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Basic validation
    if (firstName.length > 0) {
      const formData = { firstName, lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName(""); // Clear the input fields after submission
      setLastName("");
      setErrors([]); // Clear any previous errors
    } else {
      setErrors(["First name is required!"]);
    }
  }

  // Display the submitted data
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display error messages */}
      {errors.length > 0 &&
        errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
