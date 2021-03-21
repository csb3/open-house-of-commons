import React from "react";

import Constituency from "./Constituency";

export default function Results(props) {
  const { results } = props;

  return results.map(constituency => {
    return <Constituency key={constituency.collectionId} {...constituency} />;
  });
}
