const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * Setup proxy middleware
 * @param {*} app
 * @param {*} routes
 */
const setupProxy = (app, routes) => {
  routes.forEach((r) => {
    app.use(r.url, createProxyMiddleware(r.proxy));
  });
};

exports.setupProxy = setupProxy;
