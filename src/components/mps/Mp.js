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
    profile: {},
    voted: [],
    sponsored: [],
  });

  useEffect(() => {
    Promise.resolve(
      axios.get(`/api/mps/${id}`)
        .then(result => {
          setMp(() => ({...result.data}))
        })
    );
  }, []);

  return (
    <section className="mp-page">
      <aside>
        
      </aside>
    </section>
  );
}