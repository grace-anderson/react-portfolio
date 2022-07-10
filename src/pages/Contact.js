import React from "react";
import ContactForm from "../components/ContactForm";


export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Please feel free to reach out to me by completing the contact form. If you require a response, I'll contact you within a few days.</p>
      <div className="form-section">
          <ContactForm />
          </div>
    </div>
  );
}
