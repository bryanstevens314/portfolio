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
      <Link
        to="/apps"
        className="mouse rectangle1 d-flex flex-column"
        aria-label="Read about my apps"
      >
        <div>Apps</div>
        <div className={`rectangle2 ${pathname === "/apps" && "white"}`} />
      </Link>
      <Link
        to="/donate"
        className="mouse rectangle1 d-flex flex-column"
        aria-label="Donate & support me"
      >
        <div>Donate</div>
        <div className={`rectangle2 ${pathname === "/donate" && "white"}`} />
      </Link>
      <Link
        to="/supporters"
        className="mouse rectangle1 d-flex flex-column"
        aria-label="View my supporters"
      >
        <div>Supporters</div>
        <div
          className={`rectangle2 ${pathname === "/supporters" && "white"}`}
        />
      </Link>
      <Link
        to="/about"
        className="mouse rectangle1 d-flex flex-column"
        aria-label="Read more about me"
      >
        <div>About</div>
        <div className={`rectangle2 ${pathname === "/about" && "white"}`} />
      </Link>
      <Link
        to="mailto:b.stevens.bit.com"
        className="mouse rectangle1 d-flex flex-column"
        aria-label="Send me an email"
      >
        <div>Email</div>
      </Link>
      <Link
        to={GITHUB}
        target="_blank"
        rel="noreferrer"
        className="mouse rectangle1 d-flex flex-column"
        aria-label="View my Github"
      >
        <div>GitHub</div>
      </Link>
    </div>
  );
}
