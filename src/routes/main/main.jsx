import React, { useCallback } from "react";
import PropTypes from "prop-types";

import "./main.css";
import { GITHUB, LINKEDIN, RESUME } from "../../utils/helpers";

export default function Main() {
  const onLinkedInClick = useCallback(() => window.open(LINKEDIN), []);
  const onResumeClick = useCallback(() => window.open(RESUME), []);
  const onGithubClick = useCallback(() => window.open(GITHUB), []);
  return (
    <div className="web19201 d-flex justify-content-center align-items-center">
      <div className="nav_bar w-100 p-4 m-1 d-flex align-items-center justify-content-between">
        <div className="mouse bryanStevens">Bryan Stevens</div>
        <div className="d-flex align-items-center align-items-center">
          <div onClick={onLinkedInClick} className="mouse rectangle1">
            <div>LinkedIn</div>
          </div>
          <div onClick={onResumeClick} className="mouse rectangle1">
            <div>Resume</div>
          </div>
          <div onClick={onGithubClick} className="mouse rectangle1">
            <div>Github</div>
          </div>
        </div>
      </div>

      <div className="mouse softwareEngineer animate">Software Engineer</div>
    </div>
  );
}
