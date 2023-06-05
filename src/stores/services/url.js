import { callRestApi } from '../../libs/api';
import { GET_REDIRECT } from '../../constants/urlServiceConstant';

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
}