// server.js
const express = require("express");
const next = require("next");
const cors = require("cors");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

let customAssetPrefix;

switch (process.env.BUILD_ENV) {
  case "dev":
    customAssetPrefix = "http://localhost:3000";
    break;

  case "qa":
    customAssetPrefix = "https://qa.EduNet.com";
    break;

  case "prod":
    customAssetPrefix = "https://www.EduNet.com";
    break;

  default:
    customAssetPrefix = "https://www.EduNet.com";
    break;
}

app.setAssetPrefix(dev ? undefined : customAssetPrefix);

app.prepare().then(() => {
  const server = express();

  server.use(cors());

  server.get("/", (req, res) => {
    return app.render(req, res, "/home", req.query); // Assuming the home page is named 'index.js'
  });

  server.get("/login", (req, res) => {
    return app.render(req, res, "/login", req.query); // Assuming the login page is named 'login.js'
  });

  server.get("/health", (req, res) => {
    res.send({ status: "OK", version: process.env.APP_VERSION });
  });

  server.get("/ping", (req, res) => {
    res.status(200).send("PONG");
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.info(`> Ready on http://localhost:${port}`);
  });
});
