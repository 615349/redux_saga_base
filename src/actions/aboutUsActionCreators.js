import { REQUEST_PUBLIC, RECEIVE_PUBLIC, REQUEST_PUBLIC_FAILED } from '../constants';

export const requestPublic = () => ({
  type: REQUEST_PUBLIC
});

export const receivePublic = (gists) => ({
  type: RECEIVE_PUBLIC,
  gists
});

export const requestPublicFailed = () => ({
  type: REQUEST_PUBLIC_FAILED
});
