import React, { useState } from "react";
import { validateEmail, validateName, validateMessage } from "./utils/helpers";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    //get value of name that triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set the input field state to the value of the input
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateName(name)) {
      setErrorMessage("Name must be at least four (4) characters");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    } else if (validateMessage(message)) {
      setErrorMessage("Message is empty");
      return;
    }
    setSuccessMessage(
      `Thank you, ${name}. Contact form submitted successfully. I will be in touch soon.`
    );

    // Clear input and error message after successful submission
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="form-container">
      <div className="form-container__details">
        <div className="form-container__title">Welcome {name}</div>
        <form className="form">
          <div className="form__field">
            <input
            className="form__input"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="form__field">
            <input
            className="form__input"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Add your email"
            />
          </div>
          <div className="form__field">
            <textarea
            className="form__input"
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Type your message here"
            />
          </div>
          <div>
            <button className="form__submit" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div>
            <p className="success-text">{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;