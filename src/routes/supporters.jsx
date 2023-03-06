import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { ABOUT, GITHUB, LINKEDIN, RESUME } from "../utils/helpers";
import Email from "../components/Email";
import Github from "../components/Github";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";

export default function Supporters() {
  useDocumentTitle();
  return (
    <div className="web19201 d-flex flex-column align-items-center">
      <NavBar />

      <div className="about_section d-flex flex-column">
        <div className="about_me">Supporters</div>
        <pre>
          I'm looking to build my network of supporters and I hope to connect
          with individuals who share my passion for using technology to make a
          positive impact. Your support will help me to continue learning,
          growing, and making a difference in the industry.
        </pre>

        <Footer />
      </div>
    </div>
  );
}
