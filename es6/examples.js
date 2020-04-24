"use strict";

import { default as mvcApp } from "./examples/mvcApp";
import { default as simpleApp } from "./examples/simpleApp";

Object.assign(window, {
  mvcApp,
  simpleApp
});
