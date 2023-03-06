import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Dropdown from "./Dropdown";
import Email from "./Email";
import Github from "./Github";
import Hamburger from "./Hamburger";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { width } = useWindowDimensions();

  const pathname = window.location.pathname;
  const displayName = pathname !== "/" ? "Bryan Stevens" : "";

  const onHamburgerClicked = useCallback(() => {
    setShowDropdown((prev) => !prev);
  }, []);

  return (
    <div className="nav_bar w-100 p-1 d-flex align-items-center justify-content-between">
      <Link to="/" className="mouse bryanStevens">
        {displayName}
      </Link>
      {width > 600 ? (
        <div className="d-flex align-items-center align-items-center">
          <Link to="/apps" className="mouse rectangle1 d-flex flex-column">
            <div>Apps</div>
            <div className={`rectangle2 ${pathname === "/apps" && "white"}`} />
          </Link>
          <Link to="/donate" className="mouse rectangle1 d-flex flex-column">
            <div>Donate</div>
            <div
              className={`rectangle2 ${pathname === "/donate" && "white"}`}
            />
          </Link>
          <Link to="/about" className="mouse rectangle1 d-flex flex-column">
            <div>About</div>
            <div className={`rectangle2 ${pathname === "/about" && "white"}`} />
          </Link>
          <Email />
          <Github />
        </div>
      ) : (
        <>
          <Hamburger fill="white" onClick={onHamburgerClicked} />
          <Dropdown pathname={pathname} showDropdown={showDropdown} />
        </>
      )}
    </div>
  );
}
