import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import bookNest from "../components/images/bookNest.jpg";

function Portfolio() {
  const portfolioItems = [
    {
      image: <img className="card-image" src={bookNest} alt="Book Nest"></img>,
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
      title: "Project Two",
      description:
        "This is a sample description adfadsfdsa for the second project",
      link: "This is a link to the second project",
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
              <p>{item.deployed}</p>
              <i className="card-icon">{item.github}</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
