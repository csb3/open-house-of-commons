import React from "react";
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import ConstituencyBadge from "./badge/ConstituencyBadge";
import FlagBadge from "./badge/FlagBadge";
import PartyBadge from "./badge/PartyBadge";
import ResultBadge from "./badge/ResultBadge"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboard } from '@fortawesome/free-regular-svg-icons';

import "../votes/YourMP.scss";
import loading from "./../../images/loading.gif"

export default function YourMP(props) {
  const users = props.data.userInfo;
  const votes = props.data.voteInfo;
  const [cookies] = useCookies(['Email']);

  if (cookies.Email) {
    let userConstId;
    for (let user in users) {
      if (cookies.Email === users[user].email) {

        userConstId = users[user].constituency_id;
        break;
      }
    }

    let userMp;
    for (let mpVote in votes) {
      if (userConstId === votes[mpVote].constituency_id) {
        userMp = votes[mpVote];
        console.log("userMP: ", userMp);
        break; 
      } 
    }

    if (userMp) {
      return (
        <div class="user-mp">
          <div><h2>Your MP</h2></div>
          <div class="overview-info">
            <div class="overview-item">
              <div class="overview-icon-mp"><FontAwesomeIcon icon={faUser} /></div>
              <div class="overview-item-title-mp">Your MP is</div>
              <div class="overview-item-desc">
                <div>
                  <Link to={`/mps/${userMp.mp_id}`}>{userMp.first_name} {userMp.last_name} </ Link>
                </div>
                <div class="badges">
                  <div><PartyBadge party={userMp.party_name} /></div>
                  <div><FlagBadge loc={userMp.location} /></div>
                  <div><ConstituencyBadge loc={userMp.name} /></div>
                </div>
              </div>
            </div>

            <div class="overview-item">
              <div class="overview-icon"><FontAwesomeIcon icon={faClipboard} /></div>
              <div class="overview-item-title">They voted</div>

              <div class="result">
                {userMp.voted_yea && <ResultBadge result="Agreed To" />}
                {userMp.voted_nay && <ResultBadge result="Negatived" />}
                {!userMp.voted_yea && !userMp.voted_nay && <div>Paired</div>}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="loading">
          <img src={loading} width="20%" />
        </div>
      );
    }
  } else {
    return (
      <div class="user-mp">
        <div><h2>Your MP</h2></div>
        <div class="sign-up-prompt">
          ⚠️ Sign up for an accout or login to see how your MP voted at a glance!
        </div>
      </div>
    )
  }
}