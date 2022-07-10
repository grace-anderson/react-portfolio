import React from "react";
import "./NavButton.css";

export default function NavButton(props) {
  return (
    <button className={"NavButton " + (props.isActive && "NavButton-active")}>
      {props.children}
    </button>
  );
}
