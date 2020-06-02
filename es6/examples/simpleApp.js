"use strict";

import "../index";  ///

import { Body } from "easy";

export default function simpleApp() {
  const body = new Body();

  body.prepend(

    <div>
      <p>
        A simple application.
      </p>
    </div>

  );
}
