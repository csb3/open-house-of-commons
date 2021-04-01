import SponListItem from './SponListItem';

export default function SponList(props) {
  const votes = props.sponsored.map(spon =>
    <SponListItem
      key={spon.vote_num}
      id={spon.id}
      vote_num={spon.vote_num}
      summary={spon.summary}
      result={spon.result}
    />
  );

  const show = props.show ? votes : votes.slice(0, 3);
  console.log(show)

  return (
    <div>
      {show && <ul className="mp-votes-list">{show}</ul>}
      {show.length===0 && <div><em>This MP hasn't sponsored any motions yet.</em></div>}
    </div>
  );
}