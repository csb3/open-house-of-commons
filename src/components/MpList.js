import MpListItem from './MpListItem';
import './MpList.scss';

const mps = [
  {
    id: 88292,
    first_name: 'Gudie',
    last_name: 'Hutchings',
    party_name: 'Liberal',
    constituency: 'Long Range Mountains',
    location: 'Newfoundland and Labrador',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/HutchingsGudie_Lib.jpg'
  },
  {
    id: 105614,
    first_name: 'Damien',
    last_name: 'Kurek',
    party_name: 'Conservative',
    constituency: 'Battle River—Crowfoot',
    location: 'Alberta',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/KurekDamien_CPC.jpg'
  },
  {
    id: 88485,
    first_name: 'Gabriel',
    last_name: 'Ste-Marie',
    party_name: 'Bloc Québécois',
    constituency: 'Joliette',
    location: 'Quebec',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/SteMarieGabriel_BQ.jpg'
  },
  {
    id: 96352,
    first_name: 'Mary',
    last_name: 'Ng',
    party_name: 'Green',
    constituency: 'Markham—Thornhill',
    location: 'Ontario',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/NgMary_Lib.jpg'
  },
  {
    id: 88323,
    first_name: 'Darren',
    last_name: 'Fisher',
    party_name: 'Liberal',
    constituency: 'Dartmouth—Cole Harbour',
    location: 'OntaNova Scotiario',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/FisherDarren_Lib.jpg'
  },
  {
    id: 88944,
    first_name: 'Terry',
    last_name: 'Sheehan',
    party_name: 'Liberal',
    constituency: 'Sault Ste. Marie',
    location: 'Ontario',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/BeechTerry_Lib.jpg'
  }
];

export default function MpList(props) {

  return (
    <section
      data-testid="mp-list"
      className="mp-list"
    >
      <header className="mp-list__heaader">
        <h2>43rd Parliament, Session 2</h2>
      </header>
      <article className="mp-list__main">
        {props.mps.map(mp => (
          <MpListItem
            key={mp.id}
            first_name={mp.first_name}
            last_name={mp.last_name}
            party_name={mp.party_name}
            constituency={mp.constituency}
            location={mp.location}
            thumbnail={mp.thumbnail}
          />
        ))}
      </article>
      <footer className="mp-list__footer">
        If you want to see all the votes in the past, visit <a href="https://www.ourcommons.ca/Members/en/votes">House of commons.</a>
      </footer>
    </section>
  )
}