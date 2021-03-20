import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getPartyColor from '../../helpers/getPartyColor';
import partyNameSlicer from '../../helpers/partyNameSlicer';
import getPhotoURL from '../../helpers/getPhotoURL';
import './Mp.scss';
import axios from 'axios';

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
  });

  useEffect(() => {
    Promise.resolve(
      axios.get(`/api/mps/${id}`)
        .then(res => {
          const url = getPhotoURL(res.data.profile);
          setMp(() => ({...res.data, profile: { ...res.data.profile, thumbnail: url}}))
        })
    );
  }, []);

  return (
    <section className="mp-page">
      <header>
        <h1>{`${mp.profile.first_name} ${mp.profile.last_name}`}</h1>
      </header>
      <aside>
        <img src={mp.profile.thumbnail} alt={`${mp.profile.first_name} ${mp.profile.last_name}`} />
      </aside>
      <aside>

      </aside>
    </section>
  );
}