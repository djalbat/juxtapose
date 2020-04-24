"use strict";

class Controller {
  assignMethods(createMethods, model, view) {
    const methods = createMethods(model, view);

    Object.assign(this, methods);
  }
}

const controller = new Controller();

module.exports = controller;
