import { useState, useEffect } from 'react';
import axios from 'axios';

import getPhotoURL from './helpers/getPhotoURL';
import MpList from './MpList';
import './Mps.scss';
import classnames from "classnames";
import MpListItem from './MpListItem';

export default function MPVote(props) {
  const mpSummary = props.voteInfo.map(vote => {
    const newClass = classnames('mp-vote', {"--yea": vote.voted_yea, "--nay": vote.voted_nay, "--paired": vote.vote_paired, "--did-not-vote": !(vote.voted_nay || vote.voted_yea || vote.vote_paired)});
    return (<div className={newClass}><MpListItem /></div>);
  });
  return (
    <section className="mps-main">
      {mpSummary}
    </section>
  )
}