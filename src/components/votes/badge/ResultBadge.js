import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import "../badge/ResultBadge.scss";

export default function ResultBadge(props) {
  if (props.result === "Agreed To") {
    return (
      <div className="agree-badge">
        <div className="agree-icon"><FontAwesomeIcon icon={faCheck} /></div>
        <div className="result-text">Agreed to</div>
      </div>
    );
  } else if (props.result === "Nay"){
    return (
      <div className="disagree-badge">
        <div className="disagree-icon"><FontAwesomeIcon icon={faTimes} /></div>
        <div className="result-text">No</div>
      </div>
    );
    } else if (props.result === "Negatived") {
    return (
      <div className="disagree-badge">
        <div className="disagree-icon"><FontAwesomeIcon icon={faTimes} /></div>
        <div className="result-text">Negatived</div>
      </div>
    );
  } else if (props.result === "Yea") {
    return (
      <div className="agree-badge">
        <div className="agree-icon"><FontAwesomeIcon icon={faCheck} /></div>
        <div className="result-text">Yes</div>
      </div>
    );
  }
}