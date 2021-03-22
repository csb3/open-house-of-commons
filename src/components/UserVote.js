import { useCookies } from 'react-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './../components/UserVote.scss';
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
              >Yes</button>
  
              <button
                class={userVote.voted_nay ? "vote-no" : "voted-no"}
                onClick={props.displayOn, () => updateVote("insert", "nay")}
              >No</button>
            </div>
            </>
          }
  
          {!props.userView && <button class="toggle-display" onClick={props.displayOn}><FontAwesomeIcon icon={faChevronUp} /></button>}
          {props.userView && <button class="toggle-display" onClick={props.displayOff}><FontAwesomeIcon icon={faChevronDown} /></button>}
        </div>
  
        <div class={props.userView? "display-collapse": "display-close"}>
          hellolol
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