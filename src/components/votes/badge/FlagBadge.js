// This is a flag badge component.

import React from "react";

// import albertaFlag from './../../../../public/images/flags/al_flag.svg';
import albertaFlag from './../../../images/flags/al_flag.svg';

export default function FlagBadge(props) {
  return (
    <div>
      <img src={albertaFlag} />
    </div>
  );
}