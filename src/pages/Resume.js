import React from "react";
import resume from "../components/docs/resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resumé</h1>
      <div className="text-align-center external-link">
        <a href={resume} download alt="Helen-resume">
          Download my resumé
        </a>
      </div>
      <h2>Full-Stack Technical Skills</h2>
      <div className="flex justify-center">
        <div className="text-content-width-narrow">
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
            <li>Full-Stack Coding Bootcamp (Javascript): University of Sydney</li>
            <li>Certified Business Analysis Professional (CBAP)</li>
            <li>Certified Expert in BPMN 2 (OMG)</li>
            <li>Prince2 Practitioner</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
