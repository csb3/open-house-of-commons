export default function reducer(state, action) {
  const {
    list,
    parties,
    search,
    party,
    page,
  } = action;

  const execute = {
    SET_MPS_DATA: () => ({
      ...state,
      list: [...list],
      parties: [...parties],
      search,
      party,
      page,
    }),

    SET_PARTY: () => ({
      ...state,
      party,
      page: 1,
    }),

    SET_PAGE: () => ({
      ...state,
      page,
    }),

    SET_SEARCH: () => ({
      ...state,
      search,
      page: 1,
    })
  };

  if (!execute[action.type]) {
    throw new Error(`Unsupported action type: ${action.type}`);
  }

  return execute[action.type]();
}