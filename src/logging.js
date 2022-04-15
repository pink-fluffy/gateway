const morgan = require("morgan");

/**
 * Setup logging middleware
 * @param {*} app
 */
const setupLogging = (app) => {
  app.use(morgan("dev"));
};

exports.setupLogging = setupLogging;
