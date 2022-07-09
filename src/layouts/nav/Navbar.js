import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ShadeButton from "../../components/button/ShadeButton";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Portfolio",
      link: "/Portfolio",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Resume",
      link: "/Resume",
    },
  ];

  const liStyle = {
    listStyle: "none",
  };

  const location = useLocation();
  const navigate = useNavigate();

  function isActive(link){
    return location.pathname === link;
  }

  function redirect(link){
    // navigate(link);
  }

  return (
    <nav>
      <ul className="flex items-center justify-center">
        <li style={liStyle}>LOGO</li>

        {navItems.map((item) => {
          return (
            <li key={item.link} style={liStyle}>
              <ShadeButton onClick={redirect(item.link)} isActive={isActive(item.link)}>

                <NavLink  className="font-base" to={item.link}>
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