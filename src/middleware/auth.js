const axios = require("axios");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const config = process.env;

/**
 * Verify JWT token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ error: ReasonPhrases.UNAUTHORIZED });
  }
  const token = req.headers.authorization.split(" ")[1];
  axios
    .post(`http://${config.GATEWAY_HOST}:${config.GATEWAY_PORT}/user/auth`, {
      token: token,
    })
    .then((res) => {
      const authorized = res.data["data"]["authorized"];
      return next();
    })
    .catch((err) => {
      console.error(err);
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ error: ReasonPhrases.UNAUTHORIZED });
    });
};

exports.verifyToken = verifyToken;
