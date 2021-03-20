// This is the /vote/# overview info component.

import React from "react";

import ConstituencyBadge from "../badge/ConstituencyBadge";
import FlagBadge from "../badge/FlagBadge";
import PartyBadge from "../badge/PartyBadge";
import ResultBadge from "../badge/ResultBadge";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faQuestionCircle, faUser, faClipboard } from '@fortawesome/free-regular-svg-icons';

import "./../overview/OverviewInfo.scss";

export default function OverviewInfo(props) {
  if (props.data) {
    const data = props.data;
    const motionInfo = data.motionInfo["0"];

    return (
      <div class="overview-info">
        <div class="overview-item">
          <div class="overview-icon"><FontAwesomeIcon icon={faFileAlt} /></div>
          <div class="overview-item-title">Motion text</div>
          <div class="overview-item-desc"><a href={motionInfo.motion_url}>read the full motion text here</a></div>
        </div>
  
        {motionInfo.bill_num !== "" &&
          <div class="overview-item">
          <div class="overview-icon"><FontAwesomeIcon icon={faQuestionCircle} /></div>
          <div class="overview-item-title">Bill information</div>
          <div class="overview-item-desc"><a href={motionInfo.bill_url}>read about {motionInfo.bill_num} here</a></div>
        </div>
        }
        
  
        <div class="overview-item">
          <div class="overview-icon-mp"><FontAwesomeIcon icon={faUser} /></div>
          <div class="overview-item-title-mp">Motion sponsor</div>
          <div class="overview-item-desc">
            <div>
              {motionInfo.first_name} {motionInfo.last_name}
            </div>
            <div class="badges">
              <div><PartyBadge party={motionInfo.party_name} /></div>
              <div><FlagBadge loc={motionInfo.location} /></div>
              <div><ConstituencyBadge loc={motionInfo.name} /></div>
            </div>
          </div>
        </div>
  
        <div class="overview-item">
          <div class="overview-icon"><FontAwesomeIcon icon={faClipboard} /></div>
          <div class="overview-item-title">Results</div>
          <div><ResultBadge result={motionInfo.result} /></div>
        </div>
      </div>
    );
  }
}