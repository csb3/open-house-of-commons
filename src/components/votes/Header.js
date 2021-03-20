// This is the /vote/# header component.

import React from "react";

import getOrdinalNumber from "./../helpers/getOrdinalNumber.js"
import loading from "./../../images/loading.gif"

import "../votes/Header.scss";

export default function Header(props) {
  if (props.data) {
    const data = props.data.motionInfo["0"];
    const parlNumOrdinal = getOrdinalNumber(data.parl_num);
    const sessNumOrdinal = getOrdinalNumber(data.sess_num);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(data.date.toString());
    const dateStyled = date.toLocaleDateString(undefined, options);

    return (
      <div class="header">
        <h1>Vote No. {data.vote_num}</h1>
  
        <div class="header-info">
          <div class="header-info-session">
            <p>{data.parl_num}<sup>{parlNumOrdinal}</sup> Parliament</p>
            <p>{data.sess_num}<sup>{sessNumOrdinal}</sup> Session</p>
          </div>
  
          <div class="header-info-date">
            <p>Sitting No. {data.sitting_num}</p>
            <p>{dateStyled}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="loading">
        <img src={loading} width="20%" />
      </div>
    )
  }
}