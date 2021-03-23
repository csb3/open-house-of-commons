import { useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer from "../reducers/mp";
import constants from '../helpers/constants';
import getPhotoURL from '../helpers/getPhotoURL';

import BlocQuebecois from '../images/parties/party-bloc-quebecois.png';
import Conservative from '../images/parties/party-conservative.png';
import Green from '../images/parties/party-green.png';
import Liberal from '../images/parties/party-liberal.png';
import NDP from '../images/parties/party-ndp.png';

import Alberta from '../images/flags/al_flag.svg';
import BritishColumbia from '../images/flags/bc_flag.svg';
import Manitoba from '../images/flags/ma_flag.svg';
import NewBrunswick from '../images/flags/nb_flag.svg';
import NewfoundlandandLabrador from '../images/flags/nl_flag.svg';
import NorthwestTerritories from '../images/flags/nwt_flag.svg';
import NovaScotia from '../images/flags/ns_flag.svg';
import Nunavut from '../images/flags/nun_flag.svg';
import Ontario from '../images/flags/on_flag.svg';
import PrinceEdwardIsland from '../images/flags/pei_flag.svg';
import Quebec from '../images/flags/qu_flag.svg';
import Saskatchewan from '../images/flags/sa_flag.svg';
import Yukon from '../images/flags/yu_flag.svg';

const {
  SET_VOTES,
  SET_SPONS,
  SET_MP_DATA,
} = constants;

const partyNames = {
  "Bloc Québécois": BlocQuebecois,
  "Conservative": Conservative,
  "Green Party": Green,
  "Liberal": Liberal,
  "NDP": NDP,
};

const provinceNames = {
  'Prince Edward Island': PrinceEdwardIsland,
  'Alberta': Alberta,
  'Ontario': Ontario,
  'Nunavut': Nunavut,
  'British Columbia': BritishColumbia,
  'Saskatchewan': Saskatchewan,
  'Manitoba': Manitoba,
  'Quebec': Quebec,
  'New Brunswick': NewBrunswick,
  'Nova Scotia': NovaScotia,
  'Northwest Territories': NorthwestTerritories,
  'Newfoundland and Labrador': NewfoundlandandLabrador,
  'Yukon': Yukon,
}

export default function useMpData(id) {
  const [state, dispatch] = useReducer(
    reducer,
    {
      profile: {
        id: 0,
        first_name: '',
        last_name: '',
        party_name: '',
        constituency: '',
        location: '',
        thumbnail: '',
      },
      voted: [],
      sponsored: [],
      showAllVotes: false,
      showAllSpons: false,
      partyFlag: null,
      provinceFlag: null,
    }
  );

  useEffect(() => {
    Promise.resolve(
      axios.get(`/api/mps/${id}`)
        .then(res => {
          const url = getPhotoURL(res.data.profile);
          dispatch({
            type: SET_MP_DATA,
            profile: { ...res.data.profile, thumbnail: url },
            voted: [ ...res.data.voted ],
            sponsored: [ ...res.data.sponsored ],
            showAllVotes: false,
            showAllSpons: false,
            partyFlag: partyNames[res.data.profile.party_name],
            provinceFlag: provinceNames[res.data.profile.location],
          })
        })
    );
  }, []);

  const setVotes = function(showAllVotes) {
    const show = showAllVotes ? false : true;

    dispatch({ type: SET_VOTES, showAllVotes: show, });
  }

  const setSpons = function(showAllSpons) {
    const show = showAllSpons ? false : true;

    dispatch({ type: SET_SPONS, showAllSpons: show, });
  };

  return {
    state,
    setVotes,
    setSpons,
  };
}