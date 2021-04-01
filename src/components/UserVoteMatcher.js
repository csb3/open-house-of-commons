import React from "react";

import './UserVoteMatcher.scss';

export default function UserVoteMatcher(props) {
  const userVotes = props.data.userVotes["0"];
  const sumUserVotes = Number(userVotes.yesvotes) + Number(userVotes.novotes);

  let mpYeaVotes = 0;
  let mpNayVotes = 0;
  for (const vote of props.data.voteInfo) {
    if (vote.voted_yea) {
      mpYeaVotes++;
    }
    if (vote.voted_nay) {
      mpNayVotes++;
    }
  }
  const sumMPVotes = mpYeaVotes + mpNayVotes;

  const perUserVoteYea = ((userVotes.yesvotes /sumUserVotes) * 100).toFixed(1);
  const perMPVoteYea = ((mpYeaVotes / sumMPVotes) * 100).toFixed(1);

  const voteDiffYea = Math.abs(perUserVoteYea - perMPVoteYea);

  const match = 100 - voteDiffYea;

  return (
    <div className="matcher"><strong>{match.toFixed(1)}</strong>% match</div>
  );
}