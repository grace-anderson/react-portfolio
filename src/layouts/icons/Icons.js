import React, { Component } from "react";
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from "react-icons/fa";

class Icons extends Component {
  render() {
    return (
      <div className="icon-style">
          <FaGithubSquare className="icon-padding" />
          <FaLinkedin className="icon-padding"/>
          <FaStackOverflow className="icon-padding"/>
      </div>
    );
  }
}

export default Icons;
