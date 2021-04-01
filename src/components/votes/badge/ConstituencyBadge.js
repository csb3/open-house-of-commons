import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import "../badge/ConstituencyBadge.scss";

export default function ConstituencyBadge(props) {
  return (
    <div className="constituency-badge">
      <div className="constituency-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
      <div className="constituency-name">{props.loc}</div>
    </div>
  );
}