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
    case "Bloc Québécois":
      return (
        <div className="party-badge bloc-quebecois-badge">
          <div className="party-logo"><img src={BlocQuebecois} height="15px" /></div>
          <div>Bloc Québécois</div>
        </div>
      );
    case "Conservative":
      return (
        <div className="party-badge conservative-badge">
          <div className="party-logo"><img src={Conservative} height="15px" /></div>
          <div>Conservative</div>
        </div>
      );
    case "Green Party":
      return (
        <div className="party-badge green-badge">
          <div className="party-logo"><img src={Green} height="15px" /></div>
          <div>Green</div>
        </div>
      );
    case "Liberal":
      return (
        <div className="party-badge liberal-badge">
          <div className="party-logo"><img src={Liberal} height="15px" /></div>
          <div>Liberal</div>
        </div>
      );
    case "NDP":
      return (
        <div className="party-badge ndp-badge">
          <div className="party-logo"><img src={NDP} width="25px" /></div>
          <div>NDP</div>
        </div>
      );
    default:
      return (
        <div><br/></div>
      );
  }
}