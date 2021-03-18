import { useState, useEffect } from 'react';
import axios from 'axios';

import getPhotoURL from './helpers/getPhotoURL';
import MpList from './MpList';
import './Mps.scss';

export default function Mps() {
  const [mps, setMps] = useState({
    mps: [],
    CPC: true,
    LIB: true,
    NPD: true,
    GP: true,
    BQ: true,
    IND: true,
    search: '',
  });

  useEffect(() => {
    Promise.resolve(
      axios.get('api/mps/')
        .then(res => {
          const mps = res.data.map(mp => ({ ...mp, thumbnail: getPhotoURL(mp) }));
          setMps(() => ({
            mps: [...mps],
            CPC: true,
            LIB: true,
            NPD: true,
            GP: true,
            BQ: true,
            IND: true,
            search: '',
          }))
        }))
  }, []);

  return (
    <section className="mps-main">
      <header className="mps-main__header">
        <div className="mps-main__search-bar">Searching bar</div>
        <div className="mps-main__check-box">Check boxes</div>
      </header>
      <MpList
        mps={mps.mps}
      />
    </section>
  )
}