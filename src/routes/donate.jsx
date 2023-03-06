import React, { useCallback } from "react";
import PropTypes from "prop-types";

import {
  BUY_ME_A_COFFEE,
  DONATE,
  GITHUB,
  GITHUB_SPONSORS,
  LINKEDIN,
  PAYPAL,
  RESUME,
} from "../utils/helpers";
import Email from "../components/Email";
import Github from "../components/Github";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";

export default function Donate() {
  useDocumentTitle();
  return (
    <div className="web19201 d-flex justify-content-center">
      <NavBar />

      <div className="about_section w-50 d-flex flex-column">
        <div className="about_me">Donate</div>
        <pre>{DONATE}</pre>
        <div className="about_me">Monthly</div>
        <ul>
          <li>
            <Link to={GITHUB_SPONSORS} target="_blank" rel="noreferrer">
              <div>GitHub Sponsors</div>
            </Link>
          </li>
        </ul>
        <div className="about_me">One Time</div>
        <ul>
          <li>
            <Link to={BUY_ME_A_COFFEE} target="_blank" rel="noreferrer">
              <div>BuyMeACoffee.com</div>
            </Link>
          </li>
          <li>
            <Link to={PAYPAL} target="_blank" rel="noreferrer">
              <div>My Paypal</div>
            </Link>
          </li>
        </ul>
        <Footer />
      </div>
    </div>
  );
}
