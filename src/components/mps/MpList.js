import MpListItem from './MpListItem';
import './MpList.scss';

export default function MpList(props) {
  return (
    <section
      data-testid="mp-list"
      className="mp-list"
    >
      <header className="mp-list__header">
        <h2>43rd Parliament, Members of Parliament</h2>
      </header>
      <article className="mp-list__main">
        {props.mps.map(mp => (
          <MpListItem
            key={mp.id}
            id={mp.id}
            first_name={mp.first_name}
            last_name={mp.last_name}
            party_name={mp.party_name}
            constituency={mp.constituency}
            location={mp.location}
            thumbnail={mp.thumbnail}
            history={props.history}
          />
        ))}
      </article>
    </section>
  );
}
