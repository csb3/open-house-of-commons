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
  switch(props.loc) {
    case "Alberta":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={Alberta} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "British Columbia":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={BritishColumbia} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Manitoba":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={Manitoba} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "New Brunswick":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={NewBrunswick} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Newfoundland and Labrador":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={NewfoundlandandLabrador} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Northwest Territories":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={NorthwestTerritories} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Nova Scotia":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={NovaScotia} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Nunavut":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={Nunavut} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Ontario":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={Ontario} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Prince Edward Island":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={PrinceEdwardIsland} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Quebec":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={Quebec} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Saskatchewan":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={Saskatchewan} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    case "Yukon":
      return (
        <div className="flag-badge">
          <div className="flag-icon"><img src={Yukon} alt="" width="25px" height="15px" /></div>
          <div>{props.loc}</div>
        </div>
      );
    default:
      return (
        <div><br/></div>
      );
  }
}