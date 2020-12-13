import axios from 'axios';
import { grantType, HostAPIENV } from '@configs';
// import { getData } from 'utils';

export const request = async ({ host = '', url = '', method = 'GET', params = {}, data = {}, headers = {}, _token, _grantType, onUploadProgress }) => {
  // const user = getData('_u');
  // const userJson = user ? JSON.parse(user) || {} : {};
  const token = _token;
  const resquestGrantType = _grantType || grantType;
  const uploadProgress = onUploadProgress || (() => {});

  const HostAPI = HostAPIENV;

  const res = await axios({
    url: `${host || HostAPI}${url}`,
    method,
    data,
    params,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      // Authorization: `${resquestGrantType} ${token}`,
      ...headers,
    },
    onUploadProgress: uploadProgress,
  });
  return res;
};

export default request;
