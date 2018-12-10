import * as Constants from '../constants';

const initialState = {
  posts: [],
  isFetching: false,
  hasError: false
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.REQUEST_ALGOLIA:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };

    case Constants.RECEIVE_ALGOLIA:
      return {
        ...state,
        posts: action.posts,
        isFetching: false,
        hasError: false
      };

    case Constants.REQUEST_ALGOLIA_FAILED:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };

    default:
      return state
  }
};

export default homeReducer;
