import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import "../badge/ResultBadge.scss";

export default function ResultAgreedBadge(props) {
  if (props.result == "Agreed To") {
    return (
      <div class="agree-badge">
        <div class="agree-icon"><FontAwesomeIcon icon={faCheck} /></div>
        <div class="result-text">Agreed to</div>
      </div>
    );
  } else if (props.result == "Negatived") {
    return (
      <div class="disagree-badge">
        <div class="disagree-icon"><FontAwesomeIcon icon={faTimes} /></div>
        <div class="result-text">Disagreed to</div>
      </div>
    );
  }
}