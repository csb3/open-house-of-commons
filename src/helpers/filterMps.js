function filterByParty(mp, party) {
  if (party === 'All') {
    return true;
  }

  return mp.party_name === party;
}

function filterByKeyword(mp, keyword) {
  if (keyword.length === 0) {
    return true;
  }
  
  const lowered = keyword.toLowerCase().replace('-', '—');
  
  const searchArray = [
    `${mp.first_name.toLowerCase()} ${mp.last_name.toLowerCase()}`,
    `${mp.constituency.toLowerCase()}`,
    `${mp.location.toLowerCase()}`
  ];
  
  for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i].includes(lowered)) {
      return true;
    }
  }
  
    return false;
}

export default function filterMps(state) {
  return state.list.filter(mp => filterByParty(mp, state.party)).filter(mp => filterByKeyword(mp, state.search));
}