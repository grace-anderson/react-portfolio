import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import bookNest from "../components/images/bookNest.jpg";
import jate from "../components/images/jate.png";

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
        "A free book sharing app. Full-stack Javascript, Node, mySQL, sequelize, express, handlebars",
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
      image: <img className="card-image" src={jate} alt="JATE-Just Another Text Editor"></img>,
      title: "JATE - Just Another Text Editor",
      description:
        "A text editor that runs in the browser that will also function offline",
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
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="cards-container">
        {portfolioItems.map((item) => (
          <div key={item.projectTitle} className="card">
            <div class="container">
              <div>{item.image}</div>
              <h4>
                <b>{item.title}</b>
              </h4>
              <p>{item.description}</p>
              <div>{item.deployed}</div>
              <div className="card-icon">{item.github}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
