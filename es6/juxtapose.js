"use strict";

import { React } from "easy";

Object.defineProperty(window, "React", {
  get: function() {
    return React;
  }
});
