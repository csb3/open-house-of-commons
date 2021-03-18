import MpListItem from './MpListItem';
import './MpList.scss';

export default function MpList(props) {

  return (
    <section
      data-testid="mp-list"
      className="mp-list"
    >
      <article className="mp-list__main">
      <header className="mp-list__header">
        <h2>43rd Parliament, Members of Parliament</h2>
      </header>
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
          />
        ))}
      </article>
    </section>
  )
}