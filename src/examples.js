"use strict";

import { default as mvcApplication } from "./example/mvcApplication";
import { default as simpleApplication } from "./example/simpleApplication";

Object.assign(window, {
  mvcApplication,
  simpleApplication
});
