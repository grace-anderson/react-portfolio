import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import bookNest from "../components/images/bookNest.png";
import voices from "../components/images/voices.png";
import jate from "../components/images/jate.png";
import social from "../components/images/social.png";
import techBlog from "../components/images/techBlog.png";
import employeeTracker from "../components/images/employeeTracker.png";

function Portfolio() {
  const portfolioItems = [
    {
      image: (
        <a
          href="https://the-book-nest.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="card-image" src={bookNest} alt="Book Nest"></img>
        </a>
      ),
      title: "Book Nest",
      description:
        "A free book sharing app. Full-stack javascript, node, mySQL, sequelize, express, handlebars, express session, bcrypt",
      deployed: (
        <a
          href="https://the-book-nest.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          alt="Deployed Bird Nest app"
        >
          Deployed Bird Nest app
        </a>
      ),
      github: (
        <a
          href="https://github.com/grace-anderson/book-nest"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      ),
    },
    {
      image: (
        <a
          href="https://voices-stories.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="card-image" src={voices} alt="Voices"></img>
        </a>
      ),
      title: "Voices",
      description:
        "An app for sharing stories. Single-page MERNG stack built with React, GraphQL, Node, Express, Mongoose ODM, MongoDB and Material-UI",
      deployed: (
        <a
          href="https://voices-stories.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          alt="Deployed Voices app"
        >
          Deployed Voices app
        </a>
      ),
      github: (
        <a
          href="https://github.com/grace-anderson/voices"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      ),
    },
    {
      image: (
        <a
          href="https://mighty-inlet-78059.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card-image"
            src={jate}
            alt="Just Another Text Editor (JATE)"
          ></img>
        </a>
      ),
      title: "Just Another Text Editor",
      description:
        "A text editor that runs in the browser that also functions offline. Code-mirror, express, idb, if-env, node.",
      deployed: (
        <a
          href="https://mighty-inlet-78059.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          alt="Deployed JATE app"
        >
          Deployed JATE app
        </a>
      ),
      github: (
        <a
          href="https://github.com/grace-anderson/text-editor"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      ),
    },
    {
      image: (
        <a
          href="https://enigmatic-bayou-29924.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="card-image" src={techBlog} alt="Tech Blog app"></img>
        </a>
      ),
      title: "Tech Blog",
      description:
        "A CMS-style blog where developers publish blog posts and comment on others' posts. Express, MySQL, sequelize",
      deployed: (
        <a
          href="https://enigmatic-bayou-29924.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          alt="Deployed Tech Blog app"
        >
          Deployed Tech Blog app
        </a>
      ),
      github: (
        <a
          href="https://github.com/grace-anderson/tech-blog"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      ),
    },
    {
      image: (
        <a
          href="https://github.com/grace-anderson/social-network-api"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card-image"
            src={social}
            alt="Social Network API"
          ></img>
        </a>
      ),
      title: "Social Network API",
      description:
        "Users share thoughts, react to friends’ thoughts, and create friend lists. MongoDB, Mongoose ODM, Express ",
      deployed: (
        <a
          href="https://drive.google.com/file/d/1nO1uHivz6A1PZkcwcAJ_Y70_6Gppukte/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          alt="Demo of Social Network API"
        >
          Demo of Social Network API
        </a>
      ),
      github: (
        <a
          href="https://github.com/grace-anderson/social-network-api"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      ),
    },
    {
      image: (
        <a
          href="https://github.com/grace-anderson/employee-tracker"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card-image"
            src={employeeTracker}
            alt="Employee Tracker"
          ></img>
        </a>
      ),
      title: "Employee Tracker",
      description:
        "A command-line content management system (CMS) used to manage a company's employee database. MySQL, npm inquirer.",
      deployed: (
        <a
          href="https://drive.google.com/file/d/1bkk5zaaNlpFWNYM8t2c8oHwZZ_kqIJN3/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          alt="Demo of Employee Tracker"
        >
          Demo of Employee Tracker
        </a>
      ),
      github: (
        <a
          href="https://github.com/grace-anderson/employee-tracker"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      ),
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="cards-container">
        {portfolioItems.map((item) => (
          <div key={item.projectTitle} className="card">
            <div class="container">
              <div>{item.image}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="external-link">{item.deployed}</div>
              <div className="card-icon">{item.github}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
