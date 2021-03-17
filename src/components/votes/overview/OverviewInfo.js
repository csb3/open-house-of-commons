// This is the /vote/# overview info component.

import React from "react";

import FlagBadge from "../badge/FlagBadge";
import ResultAgreedBadge from "../badge/ResultAgreedBadge";
import ResultDisagreedBadge from "../badge/ResultDisagreedBadge";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faQuestionCircle, faUser, faClipboard } from '@fortawesome/free-regular-svg-icons';

import "./../overview/OverviewInfo.scss";

export default function OverviewInfo(props) {
  return (
    <div class="overview-info">
      <div class="overview-item">
        <div class="overview-icon"><FontAwesomeIcon icon={faFileAlt} /></div>
        <div class="overview-item-title">Motion text</div>
        <div class="overview-item-desc">read the full motion text here</div>
      </div>

      <div class="overview-item">
        <div class="overview-icon"><FontAwesomeIcon icon={faQuestionCircle} /></div>
        <div class="overview-item-title">Bill information</div>
        <div class="overview-item-desc">read about Bill C-206 here</div>
      </div>

      <div class="overview-item">
        <div class="overview-icon"><FontAwesomeIcon icon={faUser} /></div>
        <div class="overview-item-title">Bill sponsor</div>
        <div class="overview-item-desc"><FlagBadge /></div>
      </div>

      <div class="overview-item">
        <div class="overview-icon"><FontAwesomeIcon icon={faClipboard} /></div>
        <div class="overview-item-title">Results</div>
        <div class="overview-item-desc"><ResultAgreedBadge /><ResultDisagreedBadge /></div>
      </div>
    </div>
  );
}