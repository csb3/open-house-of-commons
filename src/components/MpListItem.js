import classnames from 'classnames';

import './MpListItem.scss';

const partyNameParser = function(string) {
  let returnString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '/\s+/' || string[i] === ',') {
      return returnString;
    }
    returnString += string[i];
  }

  return returnString;
}

export default function MpListItem(props) {
  const shortPartyName = partyNameParser(props.party_name);

  return (
    <div
      className={`mp-list-item__container ${shortPartyName}`}
      onClick={() => alert('mp clicked!')}
    >
      <div
        data-testid="mp-list-item"
        className="mp-list-item"
        
      >
        <img alt={`${props.first_name} ${props.last_name}`} src={props.thumbnail} />
        <div className="mp-list-item__main">
          <header className="mp-list-item__header">
            <h3>{props.first_name} {props.last_name}</h3>
            
          </header>
          <div>
            <h4>{props.party_name}</h4>
            <span>{props.constituency}</span><br/>
            <span>{props.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}