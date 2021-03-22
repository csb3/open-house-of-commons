import { useCookies } from 'react-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './../components/UserVote.scss';

export default function UserVote(props) {
  const [cookies] = useCookies(['Email']);

  return (
    <div class="user-vote">
      <div class="user-vote-bar">
        {cookies.Email &&
          <>
          <div>How would <strong>you</strong> vote on this motion?</div>
          <div class="user-vote-button">
            <button class="vote-yes" onClick={props.displayOn}>Yes</button>
            <button class="vote-no" onClick={props.displayOn}>No</button>
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
}