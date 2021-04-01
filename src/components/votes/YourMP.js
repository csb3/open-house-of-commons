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
  const user = props.data.userInfo[0];
  const votes = props.data.voteInfo;
  const [cookies] = useCookies(['Email']);

  if (cookies.Email) {
    let userConstId;
      if (cookies.Email === user.email) {
        userConstId = user.constituency_id;
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
        <div className="user-mp">
          <div><h2>Your MP</h2></div>
          <div className="overview-info">
            <div className="overview-item">
              <div className="overview-icon-mp"><FontAwesomeIcon icon={faUser} /></div>
              <div className="overview-item-title-mp">Your MP is</div>
              <div className="overview-item-desc">
                <div>
                  <Link to={`/mps/${userMp.mp_id}`}>{userMp.first_name} {userMp.last_name} </ Link>
                </div>
                <div className="badges">
                  <div><PartyBadge party={userMp.party_name} /></div>
                  <div><FlagBadge loc={userMp.location} /></div>
                  <div><ConstituencyBadge loc={userMp.name} /></div>
                </div>
              </div>
            </div>

            <div className="overview-item">
              <div className="overview-icon"><FontAwesomeIcon icon={faClipboard} /></div>
              <div className="overview-item-title">They voted</div>

              <div className="result">
                {userMp.voted_yea && <ResultBadge result="Yea" />}
                {userMp.voted_nay && <ResultBadge result="Nay" />}
                {!userMp.voted_yea && !userMp.voted_nay && <div>Paired</div>}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loading">
          <img src={loading} width="20%" />
        </div>
      );
    }
  } else {
    return (
      <div className="user-mp">
        <div><h2>Your MP</h2></div>
        <div className="sign-up-prompt">
          ⚠️ Sign up for an accout or login to see how your MP voted at a glance!
        </div>
      </div>
    )
  }
}