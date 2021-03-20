import React from "react";

import loading from "./../../images/loading.gif"

import "../votes/YourMP.scss";


export default function YourMP(props) {
  if (props.data) {
    return (
      <div class="user-mp">
        <div><h2>Your MP</h2></div>
        <div class="sign-up-prompt">
          ⚠️ Sign up for an accout or login to see how your MP voted at a glance!
        </div>
      </div>
    )
  } else {
    return (
      <div class="loading">
        <img src={loading} width="20%" />
      </div>
    )
  }
}