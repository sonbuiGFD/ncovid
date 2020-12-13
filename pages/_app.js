import React from 'react';

import '@styles/index.scss';
import '@vendor/index';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
