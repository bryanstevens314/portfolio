import React from "react";
import { Link } from "react-router-dom";
import { GITHUB } from "../utils/helpers";
import Email from "./Email";
import Github from "./Github";

export default function Dropdown({ showDropdown, pathname }) {
  if (!showDropdown) {
    return null;
  }
  return (
    <div className="dropdown w-100 d-flex flex-column align-items-center">
      <Link to="/apps" className="mouse rectangle1 d-flex flex-column">
        <div>Apps</div>
        <div className={`rectangle2 ${pathname === "/apps" && "white"}`} />
      </Link>
      <Link to="/donate" className="mouse rectangle1 d-flex flex-column">
        <div>Donate</div>
        <div className={`rectangle2 ${pathname === "/donate" && "white"}`} />
      </Link>
      <Link to="/about" className="mouse rectangle1 d-flex flex-column">
        <div>About</div>
        <div className={`rectangle2 ${pathname === "/about" && "white"}`} />
      </Link>
      <Link
        to="mailto:b.stevens.bit.com"
        className="mouse rectangle1 d-flex flex-column"
      >
        <div>Email</div>
      </Link>
      <Link
        to={GITHUB}
        target="_blank"
        rel="noreferrer"
        className="mouse rectangle1 d-flex flex-column"
      >
        <div>GitHub</div>
      </Link>
    </div>
  );
}
