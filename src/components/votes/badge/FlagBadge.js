import React from "react";

import Alberta from './../../../images/flags/al_flag.svg';
import BritishColumbia from './../../../images/flags/bc_flag.svg';
import Manitoba from './../../../images/flags/ma_flag.svg';
import NewBrunswick from './../../../images/flags/nb_flag.svg';
import NewfoundlandandLabrador from './../../../images/flags/nl_flag.svg';
import NorthwestTerritories from './../../../images/flags/nwt_flag.svg';
import NovaScotia from './../../../images/flags/ns_flag.svg';
import Nunavut from './../../../images/flags/nun_flag.svg';
import Ontario from './../../../images/flags/on_flag.svg';
import PrinceEdwardIsland from './../../../images/flags/pei_flag.svg';
import Quebec from './../../../images/flags/qu_flag.svg';
import Saskatchewan from './../../../images/flags/sa_flag.svg';
import Yukon from './../../../images/flags/yu_flag.svg';

import "../badge/FlagBadge.scss";

export default function FlagBadge(props) {
  return (
    <div class="flag-badge">
      <div class="flag-icon"><img src={Alberta} alt="Flag of {Alberta}" width="25px" height="15px" /></div>
      <div>Alberta</div>
    </div>
  );
}