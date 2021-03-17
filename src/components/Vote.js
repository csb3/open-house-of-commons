// This is the /vote/# page.

import { useParams, useHistory } from "react";

import Header from "./votes/Header";
import Overview from "./votes/overview/index";
import FlagBadge from "./votes/badge/FlagBadge";

import './../components/Vote.scss';

export default function Vote(props) {
  // const {id} = useParams(); // req.params.shortURL
  // const history = useHistory();
  // console.log(history);

  return (
    <div class="split-containers">
      <div class="vote-info-container">
        <Header />
        <Overview />
      </div>

      <div class="vote-charts-container">
        <FlagBadge />
      </div>
    </div>
  );
}