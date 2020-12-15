// import { toastr } from 'react-redux-toastr';
import { map } from 'lodash';
import { format } from 'date-fns';

// export const ua = window.navigator.userAgent;
// export const isIE = /MSIE|Trident|Edge\//.test(ua);

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
    // if (typeof error === 'object') {
    //   toastr.error(`${error.message}`);
    // } else {
    //   toastr.error(error);
    // }
  }
};

export const transfromContriesData = (countries) => {
  return map(countries, (coun) => ({ ...coun, coordinates: [coun.countryInfo.long, coun.countryInfo.lat] }));
};

export const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + 'Bn+';
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + 'M+';
  } else {
    return Math.round(num / 100) / 10 + 'K+';
  }
};

export const renderCountryTemplate = (country) => {
  return `
    <div class="country">
      <div class="country__info">
        <img class="country__icon" src="${country.countryInfo.flag}" alt="country flag"/>
        <span class="country__name">${country.country}</span>
      </div>
      <p class="country__case">
        Confirmed: ${rounded(country.cases)}
      </p>
      <p class="country__case">
        Deaths: ${rounded(country.deaths)}
      </p>
      <p class="country__case">
        Recovered: ${rounded(country.recovered)}
      </p>
      <p class="country__case country__time">
        Last Updated: ${dateFormat(country.updated)}
      </p>
    </div>
  `;
};

const dateString = 'MMM dd, YYY, H:mm aa';

export const dateFormat = (date, dateFormatString) => {
  return format(new Date(date), dateFormatString || dateString);
};

export const formatNumber = (amount, decimalCount = 0, decimal = '.', thousands = ',') => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
};
