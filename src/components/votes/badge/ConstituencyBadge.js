import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import "../badge/ConstituencyBadge.scss";

export default function ConstituencyBadge(props) {
  return (
    <div class="constituency-badge">
      <div class="constituency-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
      <div class="constituency-name">West Vancouver—Sunshine Coast—Sea to Sky Country</div>
    </div>
  );
}