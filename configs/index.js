export const grantType = 'Bearer';
export const defautToken = '';

export const hostConfigs = {
  development: {
    hostAPI: 'https://api.vizeomaker.com',
    hostSocket: 'http://localhost:8080',
    grantType: 'Bearer',
    defautToken: '',
  },
  production: {
    hostAPI: 'https://api.vizeomaker.com',
    hostSocket: 'https://api.vizeomaker.com',
    grantType: 'Bearer',
    defautToken: '',
  },
};

export const HostAPIENV = process.env.REACT_APP_API || hostConfigs.development.HostAPI;
export const HostFEEVN = process.env.REACT_APP_HOST_NAME || 'https://homefe.vizeomaker.com';
