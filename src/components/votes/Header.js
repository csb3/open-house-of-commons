// This is the /vote/# header component.

import React from "react";

import "../votes/Header.scss";

export default function Header(props) {
  return (
    <div class="header">
      <h1>Vote No. 60</h1>

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
}