import React, { useCallback } from "react";
import PropTypes from "prop-types";

import {
  FOOD_GENIE,
  GITHUB,
  LINKEDIN,
  RESUME,
  VUSPEX_GO,
} from "../utils/helpers";
import Email from "../components/Email";
import Github from "../components/Github";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";

export default function Apps() {
  useDocumentTitle();
  return (
    <div className="web19201 d-flex justify-content-center">
      <NavBar />

      <div className="about_section w-100 d-flex flex-column align-items-center">
        <div className="d-flex">
          <div className="about_me animate">Hand Crafted</div>
          <div className="about_me ps-2">Apps</div>
        </div>
        <div className="projects w-100 d-flex justify-content-center flex-wrap">
          {/* Projects */}
          <Link
            to={VUSPEX_GO}
            target="_blank"
            rel="noreferrer"
            className="cell"
          >
            <img
              src="/assets/images/vuspex_go_icon.png"
              className="cell__image m-3"
            ></img>
            <div className="cell__content p-3">
              <div className="cell__name">VuSpex GO</div>
              <div className="cell__description">
                Conduct virtual inspections & create offline field reports.
              </div>
              <div className="d-flex align-items-center pt-2 flex-wrap">
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  React Native
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  Redux
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  WebRTC
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={FOOD_GENIE}
            target="_blank"
            rel="noreferrer"
            className="cell"
          >
            <img
              src="/assets/images/food_genie_icon.png"
              className="cell__image m-3"
            ></img>
            <div className="cell__content p-3">
              <div className="cell__name">Food Genie+</div>
              <div className="cell__description">
                AI assisted recipe generation
              </div>
              <div className="d-flex align-items-center pt-2 flex-wrap">
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  React Native
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  Redux
                </div>
              </div>
            </div>
          </Link>
          <Link className="cell">
            <img
              src="/assets/images/elevel_icon.png"
              className="cell__image m-3"
            ></img>
            <div className="cell__content p-3">
              <div className="cell__name">ELevel+</div>
              <div className="cell__description">
                Connects via bluetooth to control physical hardware
              </div>
              <div className="d-flex align-items-center pt-2 flex-wrap">
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  React Native
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  Redux
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  Bluetooth LE
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
