module.exports = {
  // basePath: '/ncovid',
  assetPrefix: '/ncovid/',
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
