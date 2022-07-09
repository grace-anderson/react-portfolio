import React, { Component } from "react";
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from "react-icons/fa";

class Icons extends Component {
  render() {
    return (
      <div className="icon-style">
        <a
          href="https://github.com/grace-anderson"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="icon-padding" />
        </a>
        <a
          href="https://www.linkedin.com/in/helenganderson/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="icon-padding" />
        </a>
        <a
          href="https://stackexchange.com/users/20426110/hga"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow className="icon-padding" />
        </a>
      </div>
    );
  }
}

export default Icons;
