import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import "../badge/ResultAgreedBadge.scss";

export default function ResultAgreedBadge(props) {
  return (
    <div class="agree-badge">
      <div class="agree-icon"><FontAwesomeIcon icon={faCheck} /></div>
      <div>Agreed to</div>
    </div>
  );
}