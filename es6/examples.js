"use strict";

import { default as mvcApp } from "./example/mvcApp";
import { default as simpleApp } from "./example/simpleApp";

Object.assign(window, {
  mvcApp,
  simpleApp
});
