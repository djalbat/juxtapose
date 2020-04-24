"use strict";

import "../juxtapose";

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
