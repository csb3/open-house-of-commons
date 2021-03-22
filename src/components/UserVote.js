
import { useCookies } from 'react-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './../components/UserVote.scss';
import MPVoteSummary from './../components/charts/MPVoteSummary';
import UserVoteSummary from './../components/charts/UserVoteSummary';
import UserVoteMatcher from './UserVoteMatcher';
import loading from "./../images/loading.gif"

export default function UserVote(props) {
  const [cookies] = useCookies(['Email']);

  //const [userVote, setUserVote] = useState({});

  const updateVote = (type, vote) => {
    if (type === "insert") {
      if (vote === "yea") {
        console.log("----- YAY");
      } else if (vote === "nay") {
        console.log("----- NAY");
      }
    } else if (type === "delete") {
      console.log("----- DELETE");
    }
  }

  if (props.votes) {
    const userVote = props.votes["0"];

    return (
      <div class="user-vote">
        <div class="user-vote-bar">
          {cookies.Email &&
            <>
            <div>How would <strong>you</strong> vote on this motion?</div>
            <div class="user-vote-button">
              <button
                class={userVote.voted_yea ? "vote-yes" : "voted-yes"}
                onClick={props.displayOn, () => updateVote("insert", "yea")}
              >Yea</button>
  
              <button
                class={userVote.voted_nay ? "vote-no" : "voted-no"}
                onClick={props.displayOn, () => updateVote("insert", "nay")}
              >Nay</button>
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
            <UserVoteSummary data={props} />
            <MPVoteSummary data={props} />
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