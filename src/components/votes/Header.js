// This is the /vote/# header component.

import React from "react";
import { useHistory } from "react-router-dom";

import "../votes/Header.scss";

export default function Header(props) {
  if (props.data) {
    console.log("!!!!", props.data);
    console.log("????", props.data.motionInfo);

    return (
      <div class="header">
        <h1>Vote No. {props.data.motionInfo["0"].vote_num}</h1>
  
        <div class="header-info">
          <div class="header-info-session">
            <p>43rd Parliament</p>
            <p>2nd Session</p>
          </div>
  
          <div class="header-info-date">
            <p>Sitting No. 65</p>
            <p>Wednesday, February 24, 2021</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div><h2>LOADING...</h2></div>
    )
  }
}