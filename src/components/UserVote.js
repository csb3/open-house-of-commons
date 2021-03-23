
import { useCookies } from 'react-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classnames from "classnames";

import UserVoteButton from "./UserVoteButton";
import './../components/UserVote.scss';
import MPVoteSummary from './../components/charts/MPVoteSummary';
import UserVoteSummary from './../components/charts/UserVoteSummary';
import UserVoteMatcher from './UserVoteMatcher';
import loading from "./../images/loading.gif"
import axios from 'axios';

export default function UserVote(props) {
  const [cookies] = useCookies(['Email']);

  //const [userVote, setUserVote] = useState({});

  if (props.votes) {
    console.log("Props.votes: ", props.votes);
    return (
      <div class="user-vote">
        <div class="user-vote-bar">
          {cookies.Email &&
            <>
            <div>How would <strong>you</strong> vote on this motion?</div>
            <div class="user-vote-button">
              <UserVoteButton 
              {...props}
              name="Yes" 
              onClick={props.updateVote}
              selected={props.votes[0] && props.votes[0].voted_yea} 
              />
              <UserVoteButton 
              {...props}
              name="No"
              onClick={props.updateVote}
              selected={props.votes[0] && props.votes[0].voted_nay}
               />
            </div>
            </>
          }
            
          {!cookies.Email &&
            <div>See how MP votes compare to OHoC users</div>
          }
  
          {!props.userView && <button class="toggle-display" onClick={props.displayOn}><FontAwesomeIcon icon={faChevronUp} /></button>}
          {props.userView && <button class="toggle-display" onClick={props.displayOff}><FontAwesomeIcon icon={faChevronDown} /></button>}
        </div>
   
        <div class={props.userView? "display-collapse": "display-close"}>
          <UserVoteMatcher data={props} />
          <div class="user-vote-charts">
            <MPVoteSummary data={props} />
            <UserVoteSummary data={props} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div class="loading">
        <img src={loading} width="20%" />
      </div>
    );
  }
}