import './PageListItem.scss'

export default function PageListItem(props) {
  const selected = props.selected ? '-selected' : '';
  return (
    <button className={`page-button${selected}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}