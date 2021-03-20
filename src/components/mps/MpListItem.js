import './MpListItem.scss';
import getPartyColor from '../../helpers/getPartyColor';
import partyNameSlicer from '../../helpers/partyNameSlicer';

export default function MpListItem(props) {
  const partyColor = getPartyColor(props.party_name);
  const partyShortName = partyNameSlicer(props.party_name);

  const handleClick = () => props.history.push(`/mps/${props.id}`);

  return (
    <div
      style={{background: partyColor}}
      className="mp-list-item"
      onClick={handleClick}
    >
      <div
        data-testid="mp-list-item"
        className={`mp-list-item__main ${partyShortName}`}
      >
        <img alt={`${props.first_name} ${props.last_name}`} src={props.thumbnail} />
        <aside className="mp-list-item__main-aside">
          <header className="mp-list-item__main-header">
            <h3>{props.first_name} {props.last_name}</h3>
            <h4>{props.party_name}</h4>
          </header>
          <footer className="mp-list__main-footer">
            <div>{props.constituency}</div>
            <div><b>{props.location}</b></div>
          </footer>
        </aside>
      </div>
    </div>
  );
}