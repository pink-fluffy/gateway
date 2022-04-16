const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const { ROUTES } = require("./routes");
const { setupProxy } = require("./proxy");
const { setupLogging } = require("./logging");
const { setupAuth } = require("./auth");

const app = express();
app.use(cors());

setupLogging(app);
setupAuth(app, ROUTES);
setupProxy(app, ROUTES);

// Info GET endpoint
app.get("/info", (req, res, next) => {
  res.send(
    "This is a proxy service which proxies to ShopUnicorn microservices."
  );
});

// Start the Proxy
app.listen(process.env.GATEWAY_PORT, process.env.HOST, () => {
  console.log(
    `API gateway server running at ${process.env.GATEWAY_HOST}:${process.env.GATEWAY_PORT}`
  );
});
