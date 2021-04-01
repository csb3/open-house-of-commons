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
    <div className="split-containers">
      <div className="mp-info-container">
        <h1>Member of Parliament</h1>

        <div className="center">
          <div className="mp-overview">
            <img 
              className="mp-picture"
              src={state.profile.thumbnail}
              alt={`${state.profile.first_name} ${state.profile.last_name}`}
            />
          
            <div className="mp-info">
              <h2>{`${state.profile.first_name} ${state.profile.last_name}`}</h2>

              <div className="badges">
                <div className="mp-page-badge"><PartyBadge party={state.profile.party_name} /></div>
                <div className="mp-page-badge"><FlagBadge loc={state.profile.location}/></div>
                <div className="mp-page-badge"><ConstituencyBadge loc={state.profile.constituency} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="recent-votes-header">
          <h2>Motions Sponsored</h2>
          {!state.showAllSpons && <FontAwesomeIcon icon={faChevronDown} className="dropdown" onClick={() => setSpons(state.showAllSpons)} />}
          {state.showAllSpons && <FontAwesomeIcon icon={faChevronUp} className="dropdown" onClick={() => setSpons(state.showAllSpons)} />}  
        </div>
        <div className="recent-votes">
          <SponList sponsored={state.sponsored} show={state.showAllSpons} />
        </div>

        <div className="recent-votes-header">
          <h2>Recent Votes</h2>
          {!state.showAllVotes && <FontAwesomeIcon icon={faChevronDown} className="dropdown" onClick={() => setVotes(state.showAllVotes)} />}
          {state.showAllVotes && <FontAwesomeIcon icon={faChevronUp} className="dropdown" onClick={() => setVotes(state.showAllVotes)} />}  
        </div>
        <div className="recent-votes">
          <MpVoteList votes={state.voted} show={state.showAllVotes} />
        </div>
      </div>

      <div className="mp-activity-container"></div>
    </div>
  )
}