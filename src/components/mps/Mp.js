import { useParams } from 'react-router-dom';
import useMpData from '../../hooks/useMpData';
import MpVoteList from './MpVoteList';
import SponList from './SponList';
import './Mp.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import ConstituencyBadge from "./../votes/badge/ConstituencyBadge";
import FlagBadge from "./../votes/badge/FlagBadge";
import PartyBadge from "./../votes/badge/PartyBadge";

export default function Mp() {
  const { id } = useParams();
  const {
    state,
    setVotes,
    setSpons,
  } = useMpData(id);
  
  return (
    <div class="split-containers">
      <div class="mp-info-container">
        <h1>Member of Parliament</h1>

        <div class="center">
          <div class="mp-overview">
            <img 
              className="mp-picture"
              src={state.profile.thumbnail}
              alt={`${state.profile.first_name} ${state.profile.last_name}`}
            />
          
            <div class="mp-info">
              <h2>{`${state.profile.first_name} ${state.profile.last_name}`}</h2>

              <div class="badges">
                <div class="mp-page-badge"><PartyBadge party={state.profile.party_name} /></div>
                <div class="mp-page-badge"><FlagBadge loc={state.profile.location}/></div>
                <div class="mp-page-badge"><ConstituencyBadge loc={state.profile.constituency} /></div>
              </div>
            </div>
          </div>
        </div>

        <div class="recent-votes-header">
          <h2>Motions Sponsored</h2>
          {!state.showAllSpons && <FontAwesomeIcon icon={faChevronDown} class="dropdown" onClick={() => setSpons(state.showAllSpons)} />}
          {state.showAllSpons && <FontAwesomeIcon icon={faChevronUp} class="dropdown" onClick={() => setSpons(state.showAllSpons)} />}  
        </div>
        <div class="recent-votes">
          <SponList sponsored={state.sponsored} show={state.showAllSpons} />
        </div>

        <div class="recent-votes-header">
          <h2>Recent Votes</h2>
          {!state.showAllVotes && <FontAwesomeIcon icon={faChevronDown} class="dropdown" onClick={() => setVotes(state.showAllVotes)} />}
          {state.showAllVotes && <FontAwesomeIcon icon={faChevronUp} class="dropdown" onClick={() => setVotes(state.showAllVotes)} />}  
        </div>
        <div class="recent-votes">
          <MpVoteList votes={state.voted} show={state.showAllVotes} />
        </div>
      </div>

      <div class="mp-activity-container"></div>
    </div>
  )
}