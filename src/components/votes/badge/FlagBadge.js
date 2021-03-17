// This is a flag badge component.

import React from "react";

import "../badge/FlagBadge.scss";

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

export default function FlagBadge(props) {
  return (
    <div>
      <div class="flag-badge">
        <img src={Alberta} width="25px" height="15px" />
        <div>Alberta</div>
      </div>
    </div>
  );
}