"use strict";

require("../juxtapose");

const easy = require("easy");

const { Body } = easy;

const simpleApp = () => {
  const body = new Body();

  body.prepend(

    <div>
      <p>
        A simple application.
      </p>
    </div>

  );
};

module.exports = simpleApp;
