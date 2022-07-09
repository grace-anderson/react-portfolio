import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        WHEN I am presented with the Contact section THEN I see a contact form
        with fields for a name, an email address, and a message
      </p>
      <p>
        WHEN I move my cursor out of one of the form fields without entering
        text THEN I receive a notification that this field is required
      </p>
      <p>
        WHEN I enter text into the email address field THEN I receive a
        notification if I have entered an invalid email address
      </p>
    </div>
  );
}
