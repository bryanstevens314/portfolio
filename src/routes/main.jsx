import React from "react";

import { GITHUB } from "../utils/helpers";
import Github from "../components/Github";
import Apps from "../components/Apps";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";
import PreloadedImage from "../components/PreloadedImage";

export default function Main() {
  useDocumentTitle();
  return (
    <div className="web19201 d-flex justify-content-center align-items-center">
      <NavBar />

      <div className="about_section d-flex flex-column justify-content-center align-items-center">
        <PreloadedImage
          className="mouse avatar"
          src="/assets/images/bryan_stevens.webp"
          alt="logo"
        />
        <div className="mouse bryanStevens animate">Bryan Stevens</div>
        <div className="mouse softwareEngineer">Software Engineer</div>
        <div className="d-flex p-2">
          <Link
            className="button d-flex justify-content-center align-items-center"
            to="/apps"
            aria-label="View my apps"
          >
            <Apps fill="white" />
            Apps
          </Link>
          <Link
            className="button code d-flex justify-content-center align-items-center"
            to={GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="View my Github"
          >
            <Github fill="white" />
            Code
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
