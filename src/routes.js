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
    auth: false,
    proxy: {
      target: `http://${config.PRODUCTS_HOST}:${config.PRODUCTS_PORT}`,
      changeOrigin: true,
    },
  },
  {
    url: "/cart",
    auth: true,
    proxy: {
      target: `http://${config.CARTS_HOST}:${config.CARTS_PORT}`,
      changeOrigin: true,
    },
  },
];

exports.ROUTES = ROUTES;
