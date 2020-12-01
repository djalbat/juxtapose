"use strict";

const lively = require("lively-cli"), ///
      express = require("express");

const constants = require("./constants");

const { RELOAD_PATH } = constants,
      { createReloadHandler } = lively;

const server = express(), ///
      staticRouter = express.static(".");

const quietly = true,
      watchPattern = "./examples.js",
      reloadHandler = createReloadHandler(watchPattern, quietly);

server.use(staticRouter);

server.get(RELOAD_PATH, reloadHandler);

server.listen(8888);
