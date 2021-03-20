import './PartyButton.scss';
import '../../helpers/partyNameSlicer'
import partyNameSlicer from '../../helpers/partyNameSlicer';

export default function PartyButton(props) {
  const party = partyNameSlicer(props.party);
  const selected = props.selected ? 'selected' : '';

  return (
    <button
      className={`button ${party} ${selected}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}