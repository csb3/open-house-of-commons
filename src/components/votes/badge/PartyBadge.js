import React from "react";

import BlocQuebecois from './../../../images/parties/party-bloc-quebecois.png';
import Conservative from './../../../images/parties/party-conservative.png';
import Green from './../../../images/parties/party-green.png';
import Liberal from './../../../images/parties/party-liberal.png';
import NDP from './../../../images/parties/party-ndp.png';

import "../badge/PartyBadge.scss";

export default function PartyBadge(props) {
  let party = props.party;

  switch (party) {
    case "Bloc Quebecois":
      return (
        <div class="party-badge bloc-quebecois-badge">
          <div class="party-logo"><img src={BlocQuebecois} height="15px" /></div>
          <div>Bloc Quebecois</div>
        </div>
      );
    case "Conservative":
      return (
        <div class="party-badge conservative-badge">
          <div class="party-logo"><img src={Conservative} height="15px" /></div>
          <div>Conservative</div>
        </div>
      );
    case "Green":
      return (
        <div class="party-badge green-badge">
          <div class="party-logo"><img src={Green} height="15px" /></div>
          <div>Green</div>
        </div>
      );
    case "Liberal":
      return (
        <div class="party-badge liberal-badge">
          <div class="party-logo"><img src={Liberal} height="15px" /></div>
          <div>Liberal</div>
        </div>
      );
    case "NDP":
      return (
        <div class="party-badge ndp-badge">
          <div class="party-logo"><img src={NDP} width="25px" /></div>
          <div>NDP</div>
        </div>
      );
  }
}