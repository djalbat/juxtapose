'use strict';

require('./easyui-jsx');

const easyui = require('easyui'),
      { Body } = easyui;

const body = new Body();

body.append(

  <div className="example">
    An easy example.
  </div>

);
