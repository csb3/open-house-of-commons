import { useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer from "../reducers/mps";
import constants from '../helpers/constants';
import getPhotoURL from '../helpers/getPhotoURL';

const {
  SET_PAGE,
  SET_MPS_DATA,
  SET_PARTY,
  SET_SEARCH,
} = constants;

export default function useMpsData() {
  const [state, dispatch] = useReducer(
    reducer,
    {
      list: [],
      parties: [],
      search: '',
      party: 'All',
      page: 1,
    },
  );

  useEffect(() => {
    Promise.resolve(
      axios.get('/api/mps')
        .then(res => {
          const mpsData = res.data.mps.map(mp => ({ ...mp, thumbnail: getPhotoURL(mp) }));
          const parties = res.data.parties;
          dispatch(
            {
              type: SET_MPS_DATA,
              list: [...mpsData],
              parties: [...parties],
              search: '',
              party: 'All',
              page: 1,
            }
          );
        })
    );
  }, []);

  const setParty = function(selected) {
    const party = state.party === selected ? 'All' : selected;

    dispatch({ type: SET_PARTY, party });
  };

  const setPage = function(page) {
    dispatch({ type: SET_PAGE, page});
  };

  const setSearch = function(search) {
    dispatch({ type: SET_SEARCH, search});
  };

  return {
    state,
    setPage,
    setParty,
    setSearch,
  };
}