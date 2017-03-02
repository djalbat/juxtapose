'use strict';

require('../index');  /// easyui-jsx

const easyui = require('easyUI'),
      { Body } = easyui;

const Form = require('./example/jsxElement/form');

const example = () => {
  const body = new Body();

  body.append(

    <Form />

  );
};

module.exports = example;
