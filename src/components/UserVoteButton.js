import classnames from "classnames";
import { useEffect, useState } from "react";
import axios from "axios";
import {useCookies} from "react-cookie"


export default function UserVoteButton(props) {
  const cookies = useCookies(['Id']);
  const [vote, setVote] = useState();
  const buttonClassName = classnames("vote-button", {selected: props.selected, yea: props.name==="Yes", nay: props.name==="No"})
  useEffect(() => {
    axios.get(`/api/votes/${props.motionInfo[0].Id}`, {params: {userId: cookies.Id}})
      .then(vote => {
        setVote(() => {
          return (
            { ...vote.data, chartView: vote.chartView || "Overview"}
          );
        })
      })
  }, []);
  return (
    <button className={buttonClassName} onClick={() => props.onClick(props.name)}>{props.name}</button>
  )
}