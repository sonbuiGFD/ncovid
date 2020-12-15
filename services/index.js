import { request } from 'utils/request';

const API = {
  API_ALL: '/v2/all',
  API_COUNTRY: '/v2/countries',
};

export const getTotalData = () =>
  request({
    url: API.API_ALL,
    method: 'GET',
  });

export const getCountries = () =>
  request({
    url: API.API_COUNTRY,
    method: 'GET',
  });
