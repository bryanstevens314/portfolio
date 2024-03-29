import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { ABOUT, FIVERR, RESUME, UPWORK } from "../utils/helpers";
import Email from "../components/Email";
import Github from "../components/Github";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";

export default function About() {
  useDocumentTitle();
  return (
    <div className="web19201 d-flex flex-column align-items-center">
      <NavBar />

      <div className="about_section d-flex flex-column">
        <div className="about_me">About Bryan Stevens</div>
        <pre>{ABOUT}</pre>
        <Link
          to={RESUME}
          className="about_me"
          target="_blank"
          rel="noreferrer"
          aria-label="View my resume"
        >
          Resume
        </Link>
        <Link
          to={UPWORK}
          className="about_me"
          target="_blank"
          rel="noreferrer"
          aria-label="View my Upwork profile"
        >
          Upwork
        </Link>
        <Link
          to={FIVERR}
          className="about_me"
          target="_blank"
          rel="noreferrer"
          aria-label="View my Fiverr profile"
        >
          Fiverr
        </Link>
        <Footer />
      </div>
    </div>
  );
}
