'use strict';

require('../juxtapose');

const easy = require('easy');

const Model = require('./mvcApp/model'),
      View = require('./mvcApp/view'),
      controller = require('./mvcApp/controller'),
      createMethods = require('./mvcApp/controller/createMethods');

const { Body } = easy;

const mvcApp = () => {
  const model = new Model(),
        view = <View />;

  controller.assignMethods(createMethods, model, view);

  const body = new Body();

  body.prepend(view);
};

module.exports = mvcApp;
