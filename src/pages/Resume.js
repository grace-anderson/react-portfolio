import React from "react";
import resume from "../components/docs/resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className="text-align-center">
        <a href={resume} download alt="Helen-resume">
          Download my resume
        </a>
      </div>
      <h2>Full-Stack Technical Skills</h2>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>express</li>
        <li>MongoDB</li>
        <li>mongoose</li>
        <li>mySQL</li>
        <li>sequelize ORM</li>
        <li>CSS3</li>
        <li>HTML5</li>
        <li>Heroku</li>
        <li>Handlebars</li>
      </ul>
      <h2>Recent Certifications</h2>
      <ul className="skills-list">
        <li>Certified Business Analysis Professional (CBAP)</li>
        <li>Certified Expert in BPMN 2 (OMG)</li>
        <li>Prince2 Practitioner</li>
      </ul>
    </div>
  );
}
