import React from "react";
import './NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {

  const navItems = [
    {
      title: 'About Me',
      href: '#about',
      pageName: 'AboutMe'
    },
    {
      title: 'Portfolio',
      href: '#portfolio',
      pageName: 'Portfolio'
    },
    // {
    //   title: 'About Me',
    //   href: '#about',
    //   pageName: 'AboutMe'
    // },
    // {
    //   title: 'About Me',
    //   href: '#about',
    //   pageName: 'AboutMe'
    // },
  ]


  return (
    <ul className="nav nav-tabs">
      {navItems.map((item) =>  (
        <li key={item.title} className="nav-item white-text">
          <a
            href={item.href}
            onClick={() => handlePageChange(item.pageName)}
            className={currentPage === item.pageName ? "nav-link active" : "nav-link"}
          >
              {item.title}
          </a>
      </li>
      ))}

      {/* <li className="nav-item white-text">
        <a
          href="#about"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
            About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
            Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
            Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
            Resume
        </a>
      </li> */}
    </ul>
  );
}

export default NavTabs;
