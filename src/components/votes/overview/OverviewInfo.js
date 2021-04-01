// This is the /vote/# overview info component.

import React from "react";

import ConstituencyBadge from "../badge/ConstituencyBadge";
import FlagBadge from "../badge/FlagBadge";
import PartyBadge from "../badge/PartyBadge";
import ResultBadge from "../badge/ResultBadge";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faQuestionCircle, faUser, faClipboard } from '@fortawesome/free-regular-svg-icons';

import "./../overview/OverviewInfo.scss";

export default function OverviewInfo(props) {
  if (props.data) {
    const data = props.data;
    const motionInfo = data.motionInfo["0"];

    return (
      <div className="overview-info">
        <div className="overview-item">
          <div className="overview-icon"><FontAwesomeIcon icon={faFileAlt} /></div>
          <div className="overview-item-title">Motion text</div>
          <div className="overview-item-desc"><a href={motionInfo.motion_url}>read the full motion text here</a></div>
        </div>
  
        {motionInfo.bill_num !== "" &&
          <div className="overview-item">
          <div className="overview-icon"><FontAwesomeIcon icon={faQuestionCircle} /></div>
          <div className="overview-item-title">Bill information</div>
          <div className="overview-item-desc"><a href={motionInfo.bill_url}>read about Bill {motionInfo.bill_num} here</a></div>
        </div>
        }
        
  
        <div className="overview-item">
          <div className="overview-icon-mp"><FontAwesomeIcon icon={faUser} /></div>
          <div className="overview-item-title-mp">Motion sponsor</div>
          <div className="overview-item-desc">
            <div>
              <Link to={`/mps/${motionInfo.mp_id}`}>{motionInfo.first_name} {motionInfo.last_name}</Link>
            </div>
            <div className="badges">
              <div><PartyBadge party={motionInfo.party_name} /></div>
              <div><FlagBadge loc={motionInfo.location} /></div>
              <div><ConstituencyBadge loc={motionInfo.name} /></div>
            </div>
          </div>
        </div>
  
        <div className="overview-item">
          <div className="overview-icon"><FontAwesomeIcon icon={faClipboard} /></div>
          <div className="overview-item-title">Results</div>
          <div className="result"><ResultBadge result={motionInfo.result} /></div>
        </div>
      </div>
    );
  }
}