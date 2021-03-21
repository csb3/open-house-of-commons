import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getPartyColor from '../../helpers/getPartyColor';
import partyNameSlicer from '../../helpers/partyNameSlicer';
import getPhotoURL from '../../helpers/getPhotoURL';
import './Mp.scss';
import axios from 'axios';
import MpVoteList from './MpVoteList';
import SponList from './SponList';

import BlocQuebecois from './../../images/parties/party-bloc-quebecois.png';
import Conservative from './../../images/parties/party-conservative.png';
import Green from './../../images/parties/party-green.png';
import Liberal from './../../images/parties/party-liberal.png';
import NDP from './../../images/parties/party-ndp.png';

export default function Mp() {
  const { id } = useParams();
  const [mp, setMp] = useState({
    profile: {
      id: 0,
      first_name: '',
      last_name: '',
      party_name: '',
      constituency: '',
      location: '',
      thumbnail: '',
    },
    voted: [],
    sponsored: [],
    showAll: false,
  });

  useEffect(() => {
    Promise.resolve(
      axios.get(`/api/mps/${id}`)
        .then(res => {
          const url = getPhotoURL(res.data.profile);
          setMp(() => ({...res.data, showAll: false, profile: { ...res.data.profile, thumbnail: url}}))
        })
    );
  }, []);

  const showAll = () => setMp(prev => ({...prev, showAll: !prev.showAll}));

  const partyNames = {
    "Bloc Québécois": BlocQuebecois,
    "Conservative": Conservative,
    "Green Party": Green,
    "Liberal": Liberal,
    "NDP": NDP,
  };

  const flag = partyNames[mp.profile.party_name];

  return (
    <section
      className="mp-page"
      data-testid="mp-page"
    >
      <aside className="mp-page__profile">
        <div className="mp-page__profile-main">
          <img 
            className="mp-page__profile-main-img"
            src={mp.profile.thumbnail}
            alt={`${mp.profile.first_name} ${mp.profile.last_name}`}
          />
          <section className="mp-page__profile-main-detail">
            <h2>{`${mp.profile.first_name} ${mp.profile.last_name}`}</h2>
            <div>{mp.profile.party_name}</div>
            <div>{mp.profile.constituency}</div>
            <div>{mp.profile.location}</div>
          </section>
        </div>
        {flag && 
          <img
            className="mp-page__partyflag"
            src={flag}
            alt={''}
        />}
      </aside>
      <aside className="mp-page__votes">
        <div>
          Motion sponsored:
          <SponList sponsored={mp.sponsored} />
        </div>
        <div>
          Recent 5 votes:
          <MpVoteList votes={mp.voted} show={mp.showAll} showAll={showAll} />
        </div>
      </aside>
    </section>
  );
}