import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { ABOUT, GITHUB, LINKEDIN, RESUME } from "../utils/helpers";
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

      <div className="about_section w-50 d-flex flex-column">
        <div className="about_me">About Bryan Stevens</div>
        <pre>{ABOUT}</pre>
        <Link to={RESUME} className="about_me" target="_blank" rel="noreferrer">
          Resume
        </Link>
        <Footer />
      </div>
    </div>
  );
}
