import * as Constants from '../constants';

const initialState = {
  posts: [],
  number: 0,
  isFetching: false,
  hasError: false
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.REQUEST_ALGOLIA:
      return {
        ...state,
        posts: [],
        isFetching: true,
        hasError: false
      };

    case Constants.RECEIVE_ALGOLIA:
      return {
        ...state,
        posts: action.posts,
        number: action.posts.length,
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
