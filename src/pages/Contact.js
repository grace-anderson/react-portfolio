import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="flex justify-center">
        <div className="text-content-width">
          <p>
            Please feel free to reach out by completing the contact form. If you
            require a response, I'll contact you within a few days.
          </p>
        </div>
      </div>
      <div className="form-section">
        <ContactForm />
      </div>
    </div>
  );
}
