import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "../badge/ResultDisagreedBadge.scss";

export default function ResultDisagreedBadge(props) {
  return (
    <div class="disagree-badge">
      <div class="disagree-icon"><FontAwesomeIcon icon={faTimes} /></div>
      <div>Disagreed to</div>
    </div>
  );
}