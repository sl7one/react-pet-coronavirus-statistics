export const STATE = {
  data: [],
  isLoading: false,
  error: null,
  modalIsOpen: false,
  stats: {},
  filter: '',
  sorted: 'init',
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CLOSE_MODAL':
      return { ...state, modalIsOpen: false };
    case 'OPEN_MODAL':
      return { ...state, modalIsOpen: true };
    case 'GET_DATA':
      return { ...state, data: payload };
    case 'IS_LOADING':
      return { ...state, isLoading: payload };
    case 'ERROR_LOADING':
      return { ...state, error: payload };
    case 'SET_STATS_BY_CLICK':
      return { ...state, stats: payload, modalIsOpen: true };
    case 'IS_SORTED':
      return { ...state, sorted: !state.sorted };
    case 'SET_FILTER':
      return { ...state, filter: payload };
    default:
      return state;
  }
};
