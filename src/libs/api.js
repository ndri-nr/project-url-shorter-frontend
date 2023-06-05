import axios from 'axios';
import { getSession } from './auth';

export const callRestApi = async (method, url, route, data, params, responseType, auth) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const response = await axios({
    method,
    url: `${url}/${route}`,
    data,
    headers,
    params,
    responseType,
    auth,
  });

  return response.data;
};

export const callRestApiSession = async (method, url, route, data, params, responseType, auth) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `${(getSession())}`,
  };

  const response = await axios({
    method,
    url: `${url}/${route}`,
    data,
    headers,
    params,
    responseType,
    auth,
  });

  return response.data;
};
