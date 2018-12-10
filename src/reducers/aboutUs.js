import * as Constants from '../constants';

const initialState = {
  gists: [],
  isFetching: false,
  hasError: false
};

const aboutUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.REQUEST_PUBLIC:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };

    case Constants.RECEIVE_PUBLIC:
      return {
        ...state,
        gists: action.gists,
        isFetching: false,
        hasError: false
      };

    case Constants.REQUEST_PUBLIC_FAILED:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };

    default:
      return state
  }
};

export default aboutUsReducer;
