import React from "react";
import helen from "../components/images/helen.jpg";

export default function Home() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="flex items-center justify-center">
        <img className="image-circle" src={helen} alt="Helen"></img>
      </div>
      <div className="flex justify-center">
      <div className="text-content-width-med">
      <p>
        I'm a functional analyst with experience in a wide range of domains
        (airline, university, federal government) and have just added full-stack
        development to my skill set. I'm open to opportunities to use my growing
        development expertise and learn new technologies.
      </p>
      <p>
        With over 15 years experience, I bring a comprehensive perspective on
        software projects and application development as an analytical problem
        solver enthusiastic about collaboratively meeting business needs. My
        strengths are in teamwork, strategic and design thinking, business
        process analysis and improvement, requirements elicitation and system
        delivery (waterfall and agile delivery contexts).
      </p>
      </div>
      </div>
    </div>
  );
}
