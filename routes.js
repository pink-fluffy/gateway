const config = process.env;

const ROUTES = [
  {
    url: "/user",
    auth: false,
    proxy: {
      target: `http://${config.IDENTITY_HOST}:${config.IDENTITY_PORT}`,
      changeOrigin: true,
    },
  },
  {
    url: "/product",
    auth: true,
    proxy: {
      target: `http://${config.PRODUCT_HOST}:${config.PRODUCT_PORT}`,
      changeOrigin: true,
    },
  },
];

exports.ROUTES = ROUTES;
