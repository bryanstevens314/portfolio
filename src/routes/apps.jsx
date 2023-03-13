import React, { useCallback } from "react";
import PropTypes from "prop-types";

import {
  FOOD_GENIE,
  GITHUB,
  LINKEDIN,
  PICASSO_AI,
  RESUME,
  VUSPEX_GO,
} from "../utils/helpers";
import Email from "../components/Email";
import Github from "../components/Github";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";
import PreloadedImage from "../components/PreloadedImage";

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
            to={PICASSO_AI}
            target="_blank"
            rel="noreferrer"
            className="cell"
          >
            <PreloadedImage
              src="/assets/images/picasso_ai.png"
              className="cell__image m-3"
              alt="Picasso.AI"
            />
            <div className="cell__content p-3">
              <div className="cell__name">Picasso.AI</div>
              <div className="cell__description">
                Generate realistic images from text descriptions.
              </div>
              <div className="d-flex align-items-center pt-2 flex-wrap">
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  React
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  Redux
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  OpenAI
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={VUSPEX_GO}
            target="_blank"
            rel="noreferrer"
            className="cell"
          >
            <PreloadedImage
              src="/assets/images/vuspex_go_icon.png"
              className="cell__image m-3"
              alt="VuSpex GO"
            />
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
            <PreloadedImage
              src="/assets/images/food_genie_icon.png"
              className="cell__image m-3"
              alt="Food Genie"
            />
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
            <PreloadedImage
              src="/assets/images/elevel_icon.png"
              className="cell__image m-3"
              alt="ELevel"
            />
            <div className="cell__content p-3">
              <div className="cell__name">ELevel+</div>
              <div className="cell__description">
                Connect & control automotive sensors & relays via Bluetooth LE.
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
          <Link className="cell">
            <PreloadedImage
              src="/assets/images/bitcoin_faucet_icon.png"
              className="cell__image m-3"
              alt="Bitcoin Faucet"
            />
            <div className="cell__content p-3">
              <div className="cell__name">Bitcoin Facuet</div>
              <div className="cell__description">
                Earn free bitcoin by watching timed ads.
              </div>
              <div className="d-flex align-items-center pt-2 flex-wrap">
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  Objective-C
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  AdMob
                </div>
              </div>
            </div>
          </Link>
          <Link className="cell">
            <PreloadedImage
              src="/assets/images/love_story_project_icon.png"
              className="cell__image m-3"
              alt="The Love Story Project"
            />
            <div className="cell__content p-3">
              <div className="cell__name">The Love Story Project</div>
              <div className="cell__description">
                Photobooth app for weddings and events.
              </div>
              <div className="d-flex align-items-center pt-2 flex-wrap">
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  Objective-C
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  AVFoundation
                </div>
                <div className="cell__tech d-flex justify-content-center align-items-center">
                  Youtube API
                </div>
              </div>
            </div>
          </Link>
          <Footer />
        </div>
      </div>
    </div>
  );
}
