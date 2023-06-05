import React from "react";
import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";
import { DONATE } from "../utils/helpers";
import { Link } from "react-router-dom";

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
        <Link to={DONATE} className="about_me" aria-label="Donate">
          Donate
        </Link>
        <Footer />
      </div>
    </div>
  );
}
