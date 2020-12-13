import { toastr } from 'react-redux-toastr';

export const ua = window.navigator.userAgent;
export const isIE = /MSIE|Trident|Edge\//.test(ua);

export const storeData = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log('storeData', error);
  }
};

export const storeObject = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('storeData', error);
  }
};

export const getData = (key) => {
  let res = '';
  try {
    res = localStorage.getItem(key);
  } catch (error) {
    console.log('getData', error);
  }
  return res;
};

export const getObject = (key) => {
  let res = {};
  try {
    res = JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log('getData', error);
  }
  return res;
};

export const actionCreator = (actionName, extraField = []) => {
  const actionType = {
    NAME: actionName,
    PENDING: `${actionName}_PENDING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
  };
  extraField.forEach((field) => {
    actionType[field] = `${actionName}_${field}`;
  });

  return actionType;
};

export const actionTryCatchCreator = async ({ service, onPending, onSuccess, onError, ignoreError }) => {
  const isIgnoreError = ignoreError || false;
  try {
    if (onPending) onPending();
    const { status, data } = await service;

    if (status === 200) {
      if (onSuccess) onSuccess(data);
    } else {
      throw String(`HTTP request with code ${status}`);
    }
  } catch (error) {
    if (onError) onError(error);
    if (isIgnoreError) {
      return;
    }
    if (typeof error === 'object') {
      toastr.error(`${error.message}`);
    } else {
      toastr.error(error);
    }
  }
};
export const randomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const stringToSlug = (str) => {
  let s = str;
  s = s.replace(/^\s+|\s+$/g, '');
  s = s.toLowerCase();
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i += 1) {
    s = s.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  s = s
    .replace(/[^a-z0-9 -.]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return s;
};
