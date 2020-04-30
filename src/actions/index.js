import { REQUEST_ALGOLIA, RECEIVE_ALGOLIA, REQUEST_ALGOLIA_FAILED } from '../constants';

export const requestAlgolia = () => ({
  type: REQUEST_ALGOLIA
});

export const receiveAlgolia = json => ({
  type: RECEIVE_ALGOLIA,
  posts: json.hits
});

export const requestAlgoliaFailed = () => ({
  type: REQUEST_ALGOLIA_FAILED
});
