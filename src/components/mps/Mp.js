import { useParams } from 'react-router-dom';
import useMpData from '../../hooks/useMpData';
import MpVoteList from './MpVoteList';
import SponList from './SponList';
import './Mp.scss';

export default function Mp() {
  const { id } = useParams();
  const {
    state,
    setVotes,
    setSpons,
  } = useMpData(id);
  
  return (
    <section
      className="mp-page"
      data-testid="mp-page"
    >
      <aside className="mp-page__profile">
        <div className="mp-page__profile-main">
          <img 
            className="mp-page__profile-main-img"
            src={state.profile.thumbnail}
            alt={`${state.profile.first_name} ${state.profile.last_name}`}
          />
          <section className="mp-page__profile-main-detail">
            <h2>{`${state.profile.first_name} ${state.profile.last_name}`}</h2>
            <div>{state.profile.party_name}</div>
            <div>{state.profile.constituency}</div>
            <div>
              <br/><b>{state.profile.location}</b><br/>
              {state.provinceFlag &&
                <img
                  className="mp-page__partyflag"
                  src={state.provinceFlag}
                  alt={''}
                />
              }
            </div>
          </section>
        </div>
        {state.partyFlag && 
          <img
            className="mp-page__partyflag"
            src={state.partyFlag}
            alt={''}
        />}
      </aside>
      <aside className="mp-page__votes">
        <div>
          Motions sponsored:
          <SponList sponsored={state.sponsored} show={state.showAllSpons} showAll={() => setSpons(state.showAllSpons)} />
        </div>
        <div>
          Recent Votes:
          <MpVoteList votes={state.voted} show={state.showAllVotes} showAll={() => setVotes(state.showAllVotes)} />
        </div>
      </aside>
    </section>
  );
}