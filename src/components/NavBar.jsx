import React from "react";
import { Link } from "react-router-dom";
import Email from "./Email";
import Github from "./Github";

export default function NavBar() {
  const pathname = window.location.pathname;
  const displayName = pathname !== "/" ? "Bryan Stevens" : "";
  return (
    <div className="nav_bar w-100 p-1 d-flex align-items-center justify-content-between">
      <Link to="/" className="mouse bryanStevens">
        {displayName}
      </Link>
      <div className="d-flex align-items-center align-items-center">
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
        <Email />
        <Github />
      </div>
    </div>
  );
}
