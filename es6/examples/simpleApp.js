'use strict';

require('../juxtapose');

const easy = require('easy');

const { Body } = easy;

const simpleApp = () => {
  const body = new Body();

  body.prepend(

      <div className="example">
        A simple application.
      </div>

  );
};

module.exports = simpleApp;