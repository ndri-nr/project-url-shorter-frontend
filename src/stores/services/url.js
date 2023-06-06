import { callRestApi, callRestApiSession } from '../../libs/api';
import { getSession } from '../../libs/auth';
import { GET_REDIRECT, CREATE_URL } from '../../constants/urlServiceConstant';

export const getRedirect = (slug) => async () => {
  const BASE_URL = process.env.REACT_APP_API_URL;

  let data = {};

  try {
    const response = await callRestApi('get', BASE_URL, `${GET_REDIRECT}/${slug}`);
    if (response.status === 200) {
      data = response;
    } 
  } catch (err) {
    return err.response.data ;
  }

  return data;
};

export const createLink = (url) => async () => {
  const BASE_URL = process.env.REACT_APP_API_URL;

  let body = { url };
  let data = {};

  try {
    const response = getSession() ? await callRestApiSession('post', BASE_URL, CREATE_URL, body) : await callRestApi('post', BASE_URL, CREATE_URL, body);
    if (response.status === 200) {
      data = response;
    } 
  } catch (err) {
    return err.response.data ;
  }

  return data;
};
