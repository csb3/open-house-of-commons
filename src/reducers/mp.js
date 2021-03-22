export default function reducer(state, action) {
  const {
    profile,
    voted,
    sponsored,
    showAllVotes,
    showAllSpons,
    partyFlag,
    provinceFlag,
  } = action;

  const execute = {
    SET_MP_DATA: () => ({
      ...state,
      profile: { ...profile },
      voted: [...voted],
      sponsored: [...sponsored],
      showAllVotes,
      showAllSpons,
      partyFlag,
      provinceFlag,
    }),

    SET_VOTES: () => ({
      ...state,
      showAllVotes,
    }),

    SET_SPONS: () => ({
      ...state,
      showAllSpons,
    }),
  };

  if (!execute[action.type]) {
    throw new Error(`Unsupported action type: ${action.type}`);
  }

  return execute[action.type]();
}