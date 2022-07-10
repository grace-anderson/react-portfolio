import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShadeButton from "../../components/button/ShadeButton";

export default function Navbar() {
  const navItems = [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Portfolio",
      link: "/Portfolio",
    },
    {
      title: "Contact",
      link: "/Contact",
    },
    {
      title: "Resumé",
      link: "/Resume",
    },
  ];

  const liStyle = {
    listStyle: "none",
  };

  const location = useLocation();

  function isActive(link) {
    return location.pathname === link;
  }

  return (

    <nav>
      <ul className="ul-padding flex flex-wrap items-centre justify-center">

        {navItems.map((item) => {
          return (
            <li key={item.link} style={liStyle}>
              <ShadeButton
                isActive={isActive(item.link)}
              >
                <NavLink className="font-base" to={item.link}>
                  {item.title}
                </NavLink>
              </ShadeButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
