import React from "react";
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Icons() {
  const iconItems = [
    {
      icon: (
        <a
          href="https://github.com/grace-anderson"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithubSquare />
        </a>
      ),
    },
    {
      icon: (
        <a
          href="https://www.linkedin.com/in/helenganderson/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      ),
    },
    {
      icon: (
        <a
          href="https://stackexchange.com/users/20426110/hga"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow />
        </a>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center">
      {iconItems.map((item) => (
        <div key={item.href}>
          <div className="icon-style">
            <div className="icon-padding">
              <div>{item.icon}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Icons;
