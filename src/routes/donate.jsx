import React from "react";

import {
  BUY_ME_A_COFFEE,
  DONATE_TEXT,
  FIVERR,
  GITHUB_SPONSORS,
  PAYPAL,
  UPWORK,
} from "../utils/helpers";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";

export default function Donate() {
  useDocumentTitle();
  return (
    <div className="web19201 d-flex justify-content-center">
      <NavBar />

      <div className="about_section d-flex flex-column">
        <div className="about_me">Donate</div>
        <pre>{DONATE_TEXT}</pre>
        <div className="about_me">Hire Me</div>
        <ul>
          <li>
            <Link to={UPWORK} target="_blank" rel="noreferrer">
              <div>Upwork</div>
            </Link>
          </li>
          <li>
            <Link to={FIVERR} target="_blank" rel="noreferrer">
              <div>Fiverr</div>
            </Link>
          </li>
        </ul>
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
