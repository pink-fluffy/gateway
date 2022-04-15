const { verifyToken } = require("./middleware/auth");
/**
 * Setup auth middleware
 * @param {*} app
 * @param {*} routes
 */
const setupAuth = (app, routes) => {
  routes.forEach((r) => {
    if (r.auth) {
      app.use(r.url, verifyToken, function (req, res, next) {
        next();
      });
    }
  });
};

exports.setupAuth = setupAuth;
