'use strict';

require('./juxtapose');

const easy = require('easy'),
      { Body } = easy;

const body = new Body();

body.append(

  <div className="example">
  An easy example.
  </div>

);
