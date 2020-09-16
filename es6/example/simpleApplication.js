"use strict";

import "../index";  ///

import { Body } from "easy";

export default function simpleApplication() {
  const body = new Body();

  body.mount(

    <p>
      A simple application.
    </p>

  );
}
